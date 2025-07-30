import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { TrendingUp, TrendingDown, Award, BarChart3 } from "lucide-react";

const courseGrades = [
  {
    id: 1,
    course: "CS 261 - Data Structures",
    currentGrade: "A-",
    percentage: 92,
    credits: 4,
    assignments: [
      { name: "Quiz 1", grade: "A", points: "25/25", weight: "10%" },
      { name: "Project 1", grade: "A-", points: "92/100", weight: "25%" },
      { name: "Midterm", grade: "A-", points: "87/100", weight: "20%" },
      { name: "Quiz 2", grade: "A+", points: "25/25", weight: "10%" },
    ],
    trend: "up",
  },
  {
    id: 2,
    course: "CS 340 - Database Systems",
    currentGrade: "A",
    percentage: 96,
    credits: 4,
    assignments: [
      { name: "SQL Project", grade: "A", points: "96/100", weight: "30%" },
      { name: "Quiz 1", grade: "A+", points: "30/30", weight: "15%" },
      { name: "Homework 1", grade: "A", points: "48/50", weight: "10%" },
      { name: "Midterm", grade: "A", points: "94/100", weight: "25%" },
    ],
    trend: "up",
  },
  {
    id: 3,
    course: "MATH 254 - Linear Algebra",
    currentGrade: "B+",
    percentage: 87,
    credits: 4,
    assignments: [
      { name: "Problem Set 1", grade: "B+", points: "42/50", weight: "15%" },
      { name: "Quiz 1", grade: "A-", points: "22/25", weight: "10%" },
      { name: "Midterm", grade: "B", points: "83/100", weight: "30%" },
      { name: "Problem Set 2", grade: "A", points: "47/50", weight: "15%" },
    ],
    trend: "up",
  },
  {
    id: 4,
    course: "CS 361 - Software Engineering",
    currentGrade: "A-",
    percentage: 94,
    credits: 4,
    assignments: [
      { name: "Team Project Phase 1", grade: "A", points: "95/100", weight: "20%" },
      { name: "Requirements Doc", grade: "A-", points: "92/100", weight: "15%" },
      { name: "Quiz 1", grade: "A+", points: "25/25", weight: "10%" },
      { name: "Code Review", grade: "A", points: "48/50", weight: "10%" },
    ],
    trend: "up",
  },
  {
    id: 5,
    course: "CS 325 - Algorithm Analysis",
    currentGrade: "B",
    percentage: 83,
    credits: 4,
    assignments: [
      { name: "Homework 1", grade: "B+", points: "42/50", weight: "15%" },
      { name: "Homework 2", grade: "B", points: "40/50", weight: "15%" },
      { name: "Midterm", grade: "B-", points: "78/100", weight: "30%" },
      { name: "Quiz 1", grade: "A", points: "24/25", weight: "10%" },
    ],
    trend: "down",
  },
];

const overallStats = {
  cumulativeGPA: 3.8,
  creditHours: 20,
  creditsCompleted: 78,
  totalCreditsNeeded: 120,
};

const getGradeColor = (percentage: number) => {
  if (percentage >= 90) return "text-green-600 dark:text-green-400";
  if (percentage >= 80) return "text-blue-600 dark:text-blue-400";
  if (percentage >= 70) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
};

export function GradesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Academic Grades</h1>
        <p className="text-muted-foreground">Track your academic performance and progress</p>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="border border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Cumulative GPA</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{overallStats.cumulativeGPA}</p>
              </div>
              <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Credit Hours</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{overallStats.creditHours}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Credits Completed</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{overallStats.creditsCompleted}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Degree Progress</p>
              <Progress value={(overallStats.creditsCompleted / overallStats.totalCreditsNeeded) * 100} className="h-3" />
              <p className="text-xs text-muted-foreground">{overallStats.creditsCompleted}/{overallStats.totalCreditsNeeded} credits</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Grades */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Current Semester Grades</h2>
        <div className="grid gap-6">
          {courseGrades.map((course) => (
            <Card key={course.id} className="border border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">{course.course}</CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${getGradeColor(course.percentage)}`}>
                        {course.currentGrade}
                      </span>
                      <p className="text-sm text-muted-foreground">{course.percentage}%</p>
                    </div>
                    {course.trend === 'up' ? (
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </div>
                <Progress value={course.percentage} className="h-2 mt-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Recent Assignments</h4>
                  <div className="grid gap-2">
                    {course.assignments.map((assignment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-foreground">{assignment.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {assignment.weight}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-muted-foreground">{assignment.points}</span>
                          <span className={`font-semibold ${getGradeColor(
                            assignment.grade === 'A+' ? 98 : 
                            assignment.grade === 'A' ? 95 : 
                            assignment.grade === 'A-' ? 92 : 
                            assignment.grade === 'B+' ? 87 : 
                            assignment.grade === 'B' ? 83 : 
                            assignment.grade === 'B-' ? 80 : 75
                          )}`}>
                            {assignment.grade}
                          </span>
                        </div>
                      </div>
                    ))}
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