import { Brain } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Message } from "@/types"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.role === "assistant"

  return (
    <div className={`flex gap-3 ${isAI ? "items-start" : "items-start flex-row-reverse"}`}>
      {isAI ? (
        <Avatar className="size-8">
          <AvatarFallback>
            <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Brain className="size-4 text-primary" />
            </div>
          </AvatarFallback>
        </Avatar>
      ) : (
        <Avatar className="size-8">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
      <div className={`flex flex-col gap-1 max-w-[80%] ${isAI ? "" : "items-end"}`}>
        <div
          className={`rounded-lg px-4 py-2 ${
            isAI ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
          }`}
        >
          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
        </div>
        <span className="text-xs text-muted-foreground">{new Date(message.timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

