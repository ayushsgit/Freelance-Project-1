import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, FileText, CheckCircle2 } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Database Design Project",
    course: "CS 340 - Database Systems",
    dueDate: "2024-12-15",
    dueTime: "11:59 PM",
    type: "Project",
    priority: "high",
    status: "pending",
    description: "Design and implement a relational database for a library management system.",
    points: 100,
    submitted: false,
  },
  {
    id: 2,
    title: "Algorithm Analysis Report",
    course: "CS 325 - Algorithm Analysis",
    dueDate: "2024-12-18",
    dueTime: "11:59 PM",
    type: "Report",
    priority: "medium",
    status: "pending",
    description: "Analyze the time complexity of various sorting algorithms.",
    points: 75,
    submitted: false,
  },
  {
    id: 3,
    title: "Linear Algebra Problem Set",
    course: "MATH 254 - Linear Algebra",
    dueDate: "2024-12-20",
    dueTime: "11:59 PM",
    type: "Homework",
    priority: "low",
    status: "pending",
    description: "Complete problems 1-15 from Chapter 7.",
    points: 50,
    submitted: false,
  },
  {
    id: 4,
    title: "Software Engineering Proposal",
    course: "CS 361 - Software Engineering",
    dueDate: "2024-12-22",
    dueTime: "11:59 PM",
    type: "Proposal",
    priority: "medium",
    status: "pending",
    description: "Submit a project proposal for the final software engineering project.",
    points: 80,
    submitted: false,
  },
  {
    id: 5,
    title: "Data Structures Quiz",
    course: "CS 261 - Data Structures",
    dueDate: "2024-12-10",
    dueTime: "11:59 PM",
    type: "Quiz",
    priority: "high",
    status: "completed",
    description: "Quiz covering trees, graphs, and hash tables.",
    points: 25,
    submitted: true,
    grade: "A-",
  },
];

const priorityColors = {
  high: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
  low: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
};

const statusColors = {
  pending: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
  completed: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
};

export function AssignmentsPage() {
  const pendingAssignments = assignments.filter(a => a.status === 'pending');
  const completedAssignments = assignments.filter(a => a.status === 'completed');

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Assignments</h1>
        <p className="text-muted-foreground">Manage your coursework and deadlines</p>
      </div>

      {/* Pending Assignments */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Pending Assignments ({pendingAssignments.length})</h2>
        <div className="grid gap-4">
          {pendingAssignments.map((assignment) => {
            const daysUntilDue = getDaysUntilDue(assignment.dueDate);
            return (
              <Card key={assignment.id} className="border border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-foreground">{assignment.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                      <p className="text-sm text-muted-foreground mt-2">{assignment.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={`text-xs ${priorityColors[assignment.priority]}`}>
                        {assignment.priority}
                      </Badge>
                      <Badge className={`text-xs ${statusColors[assignment.status]}`}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Due {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{assignment.dueTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>{assignment.points} points</span>
                      </div>
                      <span className={`font-medium ${daysUntilDue <= 2 ? 'text-red-600 dark:text-red-400' : 'text-foreground'}`}>
                        {daysUntilDue > 0 ? `${daysUntilDue} days left` : daysUntilDue === 0 ? 'Due today' : 'Overdue'}
                      </span>
                    </div>
                    <Button size="sm" className="ml-4">
                      Submit Assignment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Completed Assignments */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Completed Assignments ({completedAssignments.length})</h2>
        <div className="grid gap-4">
          {completedAssignments.map((assignment) => (
            <Card key={assignment.id} className="border border-border bg-muted/30">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground flex items-center space-x-2">
                      <span>{assignment.title}</span>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={`text-xs ${statusColors[assignment.status]}`}>
                      Completed
                    </Badge>
                    {assignment.grade && (
                      <span className="text-lg font-semibold text-green-600">{assignment.grade}</span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Submitted {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>{assignment.points} points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}