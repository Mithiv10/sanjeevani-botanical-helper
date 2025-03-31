
import { useChat } from "@/context/ChatContext";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function ChatContainer() {
  const { chatState, sendMessage, clearChat } = useChat();

  return (
    <div className="flex flex-col h-full">
      {chatState.messages.length > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <Button 
            variant="outline"
            className="h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white"
            onClick={clearChat}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Clear chat</span>
          </Button>
        </div>
      )}
      
      <ChatHistory chatState={chatState} />
      
      <div className="fixed bottom-6 left-4 right-4 md:left-[calc(50%-20rem)] md:right-[calc(50%-20rem)] max-w-5xl mx-auto">
        <ChatInput onSendMessage={sendMessage} isLoading={chatState.isLoading} />
      </div>
    </div>
  );
}
