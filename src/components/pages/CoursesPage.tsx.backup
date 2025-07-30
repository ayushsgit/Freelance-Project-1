import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    code: "CS 261",
    name: "Data Structures",
    instructor: "Dr. Smith",
    credits: 4,
    schedule: "MWF 9:00-10:20 AM",
    location: "KEC 1003",
    progress: 75,
    students: 45,
    status: "In Progress",
    color: "bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700",
  },
  {
    id: 2,
    code: "CS 340",
    name: "Database Systems",
    instructor: "Dr. Johnson",
    credits: 4,
    schedule: "TTh 2:30-3:50 PM",
    location: "KEC 1001",
    progress: 68,
    students: 38,
    status: "In Progress",
    color: "bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700",
  },
  {
    id: 3,
    code: "MATH 254",
    name: "Linear Algebra",
    instructor: "Dr. Davis",
    credits: 4,
    schedule: "MWF 11:00-12:20 PM",
    location: "Kidder 350",
    progress: 82,
    students: 65,
    status: "In Progress",
    color: "bg-purple-100 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700",
  },
  {
    id: 4,
    code: "CS 361",
    name: "Software Engineering",
    instructor: "Dr. Wilson",
    credits: 4,
    schedule: "TTh 4:00-5:20 PM",
    location: "Owen 100",
    progress: 60,
    students: 42,
    status: "In Progress",
    color: "bg-orange-100 border-orange-300 dark:bg-orange-900/20 dark:border-orange-700",
  },
  {
    id: 5,
    code: "CS 325",
    name: "Algorithm Analysis",
    instructor: "Dr. Brown",
    credits: 4,
    schedule: "MWF 1:00-2:20 PM",
    location: "KEC 1007",
    progress: 45,
    students: 35,
    status: "In Progress",
    color: "bg-red-100 border-red-300 dark:bg-red-900/20 dark:border-red-700",
  },
];

export function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">My Courses</h1>
        <p className="text-muted-foreground">Fall 2024 Semester</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className={`border ${course.color} hover:shadow-lg transition-shadow`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">{course.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.code} • {course.instructor}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{course.schedule}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{course.credits} Credits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{course.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{course.students} Students</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Course Progress</span>
                  <span className="font-medium text-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}