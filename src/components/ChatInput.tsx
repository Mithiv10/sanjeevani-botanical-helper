
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) return;
    
    try {
      await onSendMessage(messageInput);
      setMessageInput("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2"
    >
      <Input
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Describe your health concern..."
        disabled={isLoading}
        className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
      />
      <Button 
        type="submit" 
        disabled={isLoading || !messageInput.trim()} 
        className="bg-sanjeevani hover:bg-sanjeevani-dark transition-colors rounded-lg"
        size="icon"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </form>
  );
}
