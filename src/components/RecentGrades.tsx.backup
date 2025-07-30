import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { ArrowRight } from "lucide-react";
import { filterItems, highlightText, SearchableItem } from "./SearchUtils";

const grades = [
  {
    id: 1,
    course: "Data Structures",
    assignment: "Midterm Exam",
    grade: "A-",
    percentage: 92,
    date: "Dec 10, 2024",
    title: "Midterm Exam",
  },
  {
    id: 2,
    course: "Database Systems",
    assignment: "SQL Project",
    grade: "A",
    percentage: 96,
    date: "Dec 8, 2024",
    title: "SQL Project",
  },
  {
    id: 3,
    course: "Linear Algebra",
    assignment: "Quiz 3",
    grade: "B+",
    percentage: 87,
    date: "Dec 5, 2024",
    title: "Quiz 3",
  },
  {
    id: 4,
    course: "Software Engineering",
    assignment: "Team Project",
    grade: "A",
    percentage: 94,
    date: "Dec 3, 2024",
    title: "Team Project",
  },
  {
    id: 5,
    course: "Algorithm Analysis",
    assignment: "Homework 4",
    grade: "B",
    percentage: 83,
    date: "Nov 30, 2024",
    title: "Homework 4",
  },
] as (SearchableItem & {
  id: number;
  grade: string;
  percentage: number;
  date: string;
})[];

const getGradeColor = (percentage: number) => {
  if (percentage >= 90) return "text-green-600 dark:text-green-400";
  if (percentage >= 80) return "text-blue-600 dark:text-blue-400";
  if (percentage >= 70) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
};

interface RecentGradesProps {
  searchQuery?: string;
}

export function RecentGrades({ searchQuery = "" }: RecentGradesProps) {
  const filteredGrades = filterItems(grades, searchQuery);

  if (searchQuery && filteredGrades.length === 0) {
    return (
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">Recent Grades</CardTitle>
        </CardHeader>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">No grades match your search.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Recent Grades
            {searchQuery && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredGrades.length} found)
              </span>
            )}
          </CardTitle>
          <button className="text-sm text-primary hover:text-primary/80 flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredGrades.map((grade) => (
          <div key={grade.id} className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">
                  {highlightText(grade.course || "", searchQuery)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlightText(grade.assignment || "", searchQuery)}
                </p>
              </div>
              <div className="text-right">
                <span className={`text-lg font-semibold ${getGradeColor(grade.percentage)}`}>
                  {grade.grade}
                </span>
                <p className="text-xs text-muted-foreground">{grade.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Progress 
                value={grade.percentage} 
                className="flex-1 h-2"
              />
              <span className="text-sm font-medium text-muted-foreground">{grade.percentage}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}