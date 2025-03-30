import type { Progress } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";

interface SubjectDetailsProps {
  subjectsProgress: Progress[];
  selectedSubject: string | null;
  onSubjectSelect: (subject: string) => void;
}

export function SubjectDetails({
  subjectsProgress,
  selectedSubject,
  onSubjectSelect,
}: SubjectDetailsProps) {
  const selectedSubjectData = subjectsProgress.find(
    (subject) => subject.subject === selectedSubject
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {subjectsProgress.map((subject) => (
          <Button
            key={subject.subject}
            variant={
              subject.subject === selectedSubject ? "default" : "outline"
            }
            onClick={() => onSubjectSelect(subject.subject)}
          >
            {subject.subject}
          </Button>
        ))}
      </div>
      {selectedSubjectData && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            {selectedSubjectData.subject} Progress
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Accuracy</span>
              <span>{selectedSubjectData.accuracy}%</span>
            </div>
            <ProgressBar value={selectedSubjectData.accuracy} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Mastery Level</span>
              <span>{selectedSubjectData.masteryLevel}%</span>
            </div>
            <ProgressBar
              value={selectedSubjectData.masteryLevel}
              className="h-2"
            />
          </div>
          <div>
            <span className="font-medium">Time Spent: </span>
            {selectedSubjectData.timeSpent} minutes
          </div>
        </div>
      )}
    </div>
  );
}
