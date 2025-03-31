
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div
        className={cn(
          "chat-message-content max-w-[85%] rounded-2xl shadow-sm",
          isUser
            ? "bg-sanjeevani text-white rounded-tr-none"
            : "bg-gradient-to-br from-sanjeevani-blue to-sanjeevani-blue/90 text-gray-800 rounded-tl-none"
        )}
      >
        <div className="text-sm font-medium mb-1 px-4 pt-3">
          {isUser ? 'You' : 'Sanjeevani'}
        </div>
        <div className="text-sm whitespace-pre-wrap px-4 pb-3">
          {message.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
