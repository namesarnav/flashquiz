import { StudySession } from "@/lib/types";
import Link from "next/link";
import { Calendar, Clock, FileText } from "lucide-react";

interface SessionCardProps {
  session: StudySession;
}

export default function SessionCard({ session }: SessionCardProps) {
  // Format date
  const formattedDate = new Date(session.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-border shadow-sm transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{session.title}</h3>
          <div className="flex items-center">
            <span className={`inline-flex h-7 items-center rounded-full px-2.5 text-xs font-medium ${
              session.score >= 90 ? "bg-green-100 text-green-800" :
              session.score >= 70 ? "bg-yellow-100 text-yellow-800" :
              "bg-red-100 text-red-800"
            }`}>
              {session.score}%
            </span>
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <FileText className="h-4 w-4 mr-2" />
            {session.documentName}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {formattedDate}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {session.timeSpent} minutes • {session.questionCount} questions
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
          <Link 
            href={`/quiz?sessionId=${session.id}`}
            className="text-sm text-primary font-medium hover:underline"
          >
            Retry Quiz
          </Link>
          <Link 
            href={`/results?sessionId=${session.id}`}
            className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md hover:bg-secondary/80"
          >
            View Results
          </Link>
        </div>
      </div>
    </div>
  );
}