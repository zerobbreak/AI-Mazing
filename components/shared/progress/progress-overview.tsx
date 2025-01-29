"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Progress } from "@/type"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ProgressOverviewProps {
  subjectsProgress: Progress[]
}

export function ProgressOverview({ subjectsProgress }: ProgressOverviewProps) {
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

  const options = {
    responsive: true,
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
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Progress Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: "300px" }}>
          <Bar data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}

