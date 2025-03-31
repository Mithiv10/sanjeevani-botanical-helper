
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { cn } from "@/lib/utils";

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
      <div
        className={cn(
          "chat-message-content",
          isUser
            ? "bg-sanjeevani text-white"
            : "bg-sanjeevani-blue text-gray-800"
        )}
      >
        <div className="text-sm font-medium mb-1">
          {isUser ? 'You' : 'Sanjeevani'}
        </div>
        <div className="text-sm whitespace-pre-wrap">
          {message.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
