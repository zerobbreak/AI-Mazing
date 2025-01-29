
//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
import { Topic } from "@/type"

export function generateAIResponse(message: string, selectedTopic: Topic | null): string {
  // Simulate processing time
  //await delay(1000)

  if (selectedTopic) {
    return `Here's some information about ${selectedTopic.name} related to "${message}": 
    ${selectedTopic.description}
    
    Is there anything specific you'd like to know about ${selectedTopic.name}?`
  } else {
    return `I understand you're asking about "${message}". 
    As a general tutor, I can assist you with various subjects. 
    Could you please provide more context or specify a particular topic you'd like help with?`
  }
}

