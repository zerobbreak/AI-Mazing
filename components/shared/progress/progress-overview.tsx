"use client"

import { useMemo } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import type { Progress } from "@/type"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ProgressOverviewProps {
  subjectsProgress: Progress[]
  onSubjectSelect: (subject: string) => void
}

export function ProgressOverview({ subjectsProgress, onSubjectSelect }: ProgressOverviewProps) {
  const chartData = useMemo(
    () => ({
      labels: subjectsProgress.map((subject) => subject.subject),
      datasets: [
        {
          label: "Accuracy",
          data: subjectsProgress.map((subject) => subject.accuracy),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Mastery Level",
          data: subjectsProgress.map((subject) => subject.masteryLevel),
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    }),
    [subjectsProgress],
  )

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Subject Progress",
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index
        onSubjectSelect(subjectsProgress[index].subject)
      }
    },
  }

  return (
    <div className="w-full h-[400px]">
      <Bar data={chartData} options={options} />
    </div>
  )
}

