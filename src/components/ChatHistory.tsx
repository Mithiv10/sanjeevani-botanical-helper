
import { useRef, useEffect } from "react";
import { ChatState } from "@/types/chat";
import ChatMessage from "@/components/ChatMessage";
import { Loader2, Leaf } from "lucide-react";

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
    <div className="flex-1 overflow-y-auto pt-20 pb-32 px-4 md:px-[10%]">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div className="bg-gradient-to-br from-sanjeevani-light to-sanjeevani p-8 rounded-full shadow-inner">
            <Leaf className="h-12 w-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-medium text-sanjeevani mb-2">Welcome to Sanjeevani</h2>
            <p className="max-w-sm text-gray-600">
              Your Ayurvedic guide for natural home remedies. Describe your health concern to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-md text-sm">
            <div className="bg-white p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-gray-50">
              "I have a headache that won't go away"
            </div>
            <div className="bg-white p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-gray-50">
              "What helps with a sore throat?"
            </div>
            <div className="bg-white p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-gray-50">
              "Natural remedies for seasonal allergies"
            </div>
            <div className="bg-white p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-gray-50">
              "How to reduce fever naturally?"
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 max-w-3xl mx-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      )}
      
      {isLoading && (
        <div className="flex justify-start max-w-3xl mx-auto mt-8">
          <div className="chat-message-content bg-gradient-to-br from-sanjeevani-blue to-sanjeevani-blue/90 text-gray-800 rounded-2xl rounded-tl-none max-w-[85%]">
            <div className="text-sm font-medium mb-1 px-4 pt-3">Sanjeevani</div>
            <div className="px-4 pb-3 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Preparing your remedy...</span>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} className="h-4" />
    </div>
  );
}
