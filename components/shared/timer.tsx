import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

interface TimerProps {
  duration: number
  onTimeUp: () => void
}

export function Timer({ duration, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    } else {
      onTimeUp()
    }
  }, [timeLeft, onTimeUp])

  const progress = (timeLeft / duration) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Time Remaining</span>
        <span>
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
        </span>
      </div>
      <Progress value={progress} />
    </div>
  )
}

