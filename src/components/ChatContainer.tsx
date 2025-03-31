
import { useChat } from "@/context/ChatContext";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function ChatContainer() {
  const { chatState, sendMessage, clearChat } = useChat();

  return (
    <div className="flex flex-col h-full max-h-full rounded-lg overflow-hidden border shadow-lg">
      <div className="bg-sanjeevani p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Sanjeevani</h1>
          <p className="text-xs opacity-80">Ayurvedic Home Remedies</p>
        </div>
        {chatState.messages.length > 0 && (
          <Button 
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:bg-sanjeevani-dark"
            onClick={clearChat}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Clear chat</span>
          </Button>
        )}
      </div>
      
      <ChatHistory chatState={chatState} />
      
      <ChatInput onSendMessage={sendMessage} isLoading={chatState.isLoading} />
    </div>
  );
}
