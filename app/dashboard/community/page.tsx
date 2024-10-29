import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Community() {
  return (
    <ContentLayout title="Community">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <UserGroupIcon className="w-6 h-6 text-purple-500" />
            <CardTitle>Discussion Forum</CardTitle>
            <CardDescription>Connect with fellow learners</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Join ongoing discussions on various topics.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Rules</CardTitle>
            <CardDescription>Guidelines for a safe learning space</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Be respectful and supportive of others' learning journeys.</p>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
