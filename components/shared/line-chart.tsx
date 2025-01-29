"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { QuizScore } from "@/type"
import { Subject } from "@/constants"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface LineChartProps {
  quizScores: QuizScore[]
}

export function LineChart({ quizScores }: LineChartProps) {
  const subjects: Subject[] = ["Mathematics", "Science", "English", "History"]
  const quizNumbers = Array.from(new Set(quizScores.map((score) => score.quizNumber))).sort((a, b) => a - b)

  const data = {
    labels: quizNumbers.map((num) => `Quiz ${num}`),
    datasets: subjects.map((subject) => ({
      label: subject,
      data: quizNumbers.map((quizNumber) => {
        const score = quizScores.find((s) => s.subject === subject && s.quizNumber === quizNumber)
        return score ? score.score : null
      }),
      borderColor: getSubjectColor(subject),
      backgroundColor: getSubjectColor(subject, 0.5),
      tension: 0.3,
    })),
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }

  return <Line options={options} data={data} />
}

function getSubjectColor(subject: Subject, alpha = 1): string {
  const colors = {
    Mathematics: `rgba(99, 102, 241, ${alpha})`,
    Science: `rgba(34, 197, 94, ${alpha})`,
    English: `rgba(249, 115, 22, ${alpha})`,
    History: `rgba(234, 179, 8, ${alpha})`,
  }
  return colors[subject]
}

