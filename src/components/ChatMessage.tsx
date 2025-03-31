
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { cn } from "@/lib/utils";
import { User, Leaf } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      "flex w-full",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className="flex gap-4 max-w-full">
        <div className={cn(
          "flex items-center justify-center h-8 w-8 rounded-full shrink-0 mt-1",
          isUser ? "bg-gray-700" : "bg-sanjeevani"
        )}>
          {isUser ? 
            <User className="h-4 w-4 text-white" /> : 
            <Leaf className="h-4 w-4 text-white" />
          }
        </div>
        
        <div className="text-sm prose max-w-[calc(100%-40px)]">
          <div className="font-semibold mb-1">
            {isUser ? 'You' : 'Sanjeevani'}
          </div>
          <div className="whitespace-pre-wrap">
            {message.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
