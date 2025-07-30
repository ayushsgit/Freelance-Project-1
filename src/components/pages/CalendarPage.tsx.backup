import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const todayEvents = [
  {
    id: 1,
    title: "Data Structures",
    type: "class",
    time: "9:00 AM - 10:20 AM",
    location: "KEC 1003",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Linear Algebra",
    type: "class",
    time: "11:00 AM - 12:20 PM",
    location: "Kidder 350",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Database Project Due",
    type: "assignment",
    time: "11:59 PM",
    location: "Online Submission",
    color: "bg-red-500",
  },
  {
    id: 4,
    title: "Study Group - Algorithms",
    type: "study",
    time: "7:00 PM - 9:00 PM",
    location: "Library Room 204",
    color: "bg-purple-500",
  },
];

const upcomingDeadlines = [
  {
    id: 1,
    title: "Algorithm Analysis Report",
    course: "CS 325",
    dueDate: "Dec 18, 2024",
    daysLeft: 5,
  },
  {
    id: 2,
    title: "Linear Algebra Problem Set",
    course: "MATH 254",
    dueDate: "Dec 20, 2024",
    daysLeft: 7,
  },
  {
    id: 3,
    title: "Software Engineering Proposal",
    course: "CS 361",
    dueDate: "Dec 22, 2024",
    daysLeft: 9,
  },
];

export function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Calendar</h1>
        <p className="text-muted-foreground">Friday, December 13, 2024</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <div className={`w-4 h-4 rounded-full ${event.color}`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">{deadline.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{deadline.course}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{deadline.dueDate}</span>
                    <Badge variant="outline" className="text-xs">
                      {deadline.daysLeft} days
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Calendar Grid Placeholder */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">December 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Full calendar view coming soon</p>
            <p className="text-sm">Integrate with your favorite calendar app</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}