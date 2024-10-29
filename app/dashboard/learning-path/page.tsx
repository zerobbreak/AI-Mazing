import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function LearningPath() {
  return (
    <ContentLayout title="Learning Path">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <AcademicCapIcon className="w-6 h-6 text-indigo-500" />
            <CardTitle>Current Learning Path</CardTitle>
            <CardDescription>Your active path in AI studies</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Data Science Foundations</p>
            <p>Progress: 70%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Courses</CardTitle>
            <CardDescription>Continue your journey with these next steps</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Machine Learning Basics</p>
            <p>Advanced AI Techniques</p>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
