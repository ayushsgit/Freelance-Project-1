import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { filterItems, highlightText, SearchableItem } from "./SearchUtils";

const assignments = [
  {
    id: 1,
    title: "Database Design Project",
    course: "CS 340",
    dueDate: "Dec 15, 2024",
    priority: "high",
    daysLeft: 2,
    description: "Design and implement a relational database system",
  },
  {
    id: 2,
    title: "Algorithm Analysis Report",
    course: "CS 325",
    dueDate: "Dec 18, 2024",
    priority: "medium",
    daysLeft: 5,
    description: "Analyze time complexity of sorting algorithms",
  },
  {
    id: 3,
    title: "Linear Algebra Problem Set",
    course: "MATH 254",
    dueDate: "Dec 20, 2024",
    priority: "low",
    daysLeft: 7,
    description: "Complete problems from chapter 7",
  },
  {
    id: 4,
    title: "Software Engineering Proposal",
    course: "CS 361",
    dueDate: "Dec 22, 2024",
    priority: "medium",
    daysLeft: 9,
    description: "Project proposal for software engineering course",
  },
] as (SearchableItem & {
  id: number;
  priority: "high" | "medium" | "low";
  daysLeft: number;
  dueDate: string;
})[];

const priorityColors = {
  high: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
  low: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
};

interface UpcomingAssignmentsProps {
  searchQuery?: string;
}

export function UpcomingAssignments({ searchQuery = "" }: UpcomingAssignmentsProps) {
  const filteredAssignments = filterItems(assignments, searchQuery);

  if (searchQuery && filteredAssignments.length === 0) {
    return (
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">Upcoming Assignments</CardTitle>
        </CardHeader>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">No assignments match your search.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Upcoming Assignments
            {searchQuery && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredAssignments.length} found)
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
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-foreground">
                  {highlightText(assignment.title, searchQuery)}
                </h4>
                <Badge className={`text-xs ${priorityColors[assignment.priority]}`}>
                  {assignment.priority}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="font-medium">
                  {highlightText(assignment.course || "", searchQuery)}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{assignment.dueDate}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{assignment.daysLeft} days</p>
              <p className="text-xs text-muted-foreground">remaining</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}