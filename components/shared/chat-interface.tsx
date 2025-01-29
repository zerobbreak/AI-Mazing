"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { generateAIResponse } from "@/utils/aiSimulator"
import { Message, Topic } from "@/type"

interface ChatInterfaceProps {
  selectedTopic: Topic | null
}

export function ChatInterface({ selectedTopic }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your virtual tutor. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  // const { input, handleInputChange, handleSubmit, isLoading } = useChat({
  //   api: "/api/chat",
  //   onResponse: (response) => {
  //     // This is where we'd typically handle the streaming response
  //     // For now, we'll simulate it with our generateAIResponse function
  //   },
  // })

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input, selectedTopic)
      const aiMessage: Message = { role: "assistant", content: aiResponse }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)

    setInput("")
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
            <div className={`flex ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-start`}>
              <Avatar className="w-8 h-8">
                <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
              </Avatar>
              <div
                className={`mx-2 p-3 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit" disabled={input.trim() === ""}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

