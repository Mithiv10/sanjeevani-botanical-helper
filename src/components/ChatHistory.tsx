
import { useRef, useEffect } from "react";
import { ChatState } from "@/types/chat";
import ChatMessage from "@/components/ChatMessage";
import { Loader2 } from "lucide-react";

interface ChatHistoryProps {
  chatState: ChatState;
}

export default function ChatHistory({ chatState }: ChatHistoryProps) {
  const { messages, isLoading } = chatState;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4">
          <div className="bg-sanjeevani-light/20 p-6 rounded-full">
            <img
              src="/placeholder.svg"
              alt="Sanjeevani Logo"
              width={64}
              height={64}
              className="opacity-50"
            />
          </div>
          <h2 className="text-2xl font-medium text-sanjeevani">Welcome to Sanjeevani</h2>
          <p className="max-w-sm">
            Your Ayurvedic guide for natural home remedies. Describe your health concern to get started.
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))
      )}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="chat-message-content bg-sanjeevani-blue text-gray-800">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sanjeevani is thinking...</span>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}
