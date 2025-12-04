export interface DashboardUser {
  name: string;
  learningPath: string;
  progress: number;
  recommendations: string[];
  completedLessons: number;
  hoursSpent: number;
  performanceTrend: string;
}

export interface QuickStat {
  label: string;
  value: string;
  icon: any;
  color: string;
  bg: string;
}

export interface UpcomingLesson {
  title: string;
  duration: string;
  date: string;
}

export interface RecentActivity {
  action: string;
  item: string;
  time: string;
  color: string;
}
