
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ChatMessage, ChatState } from '@/types/chat';
import { sendChatMessage } from '@/api/chatApi';
import { useToast } from '@/components/ui/use-toast';

interface ChatContextProps {
  chatState: ChatState;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null
  });
  
  const { toast } = useToast();

  const sendMessage = useCallback(async (content: string) => {
    try {
      // Create a new user message
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        role: 'user',
        timestamp: new Date()
      };
      
      // Update state with the user message
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isLoading: true,
        error: null
      }));

      // Send the message to the API
      const assistantMessage = await sendChatMessage([
        ...chatState.messages,
        userMessage
      ]);

      // Update state with the assistant's response
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false
      }));
    } catch (error) {
      console.error('Error in sendMessage:', error);
      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to get a response. Please try again.'
      }));
      
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    }
  }, [chatState.messages, toast]);

  const clearChat = useCallback(() => {
    setChatState({
      messages: [],
      isLoading: false,
      error: null
    });
  }, []);

  return (
    <ChatContext.Provider value={{ chatState, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
