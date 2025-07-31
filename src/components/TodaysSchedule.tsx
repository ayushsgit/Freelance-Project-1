import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin } from "lucide-react";
import { filterItems, highlightText, SearchableItem } from "./SearchUtils";

const schedule = [
  {
    id: 1,
    course: "Data Structures",
    title: "Data Structures",
    name: "CS 261",
    time: "9:00 AM - 10:20 AM",
    location: "Kelley Engineering Center 1003",
    color: "bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    course: "Linear Algebra",
    title: "Linear Algebra",
    name: "MATH 254",
    time: "11:00 AM - 12:20 PM",
    location: "Kidder Hall 350",
    color: "bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    course: "Database Systems",
    title: "Database Systems",
    name: "CS 340",
    time: "2:30 PM - 3:50 PM",
    location: "Kelley Engineering Center 1001",
    color: "bg-purple-100 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700",
    dotColor: "bg-purple-500",
    current: true,
  },
  {
    id: 4,
    course: "Software Engineering",
    title: "Software Engineering",
    name: "CS 361",
    time: "4:00 PM - 5:20 PM",
    location: "Owen Hall 100",
    color: "bg-orange-100 border-orange-300 dark:bg-orange-900/20 dark:border-orange-700",
    dotColor: "bg-orange-500",
  },
] as (SearchableItem & {
  id: number;
  time: string;
  location: string;
  color: string;
  dotColor: string;
  current?: boolean;
})[];

interface TodaysScheduleProps {
  searchQuery?: string;
}

export function TodaysSchedule({ searchQuery = "" }: TodaysScheduleProps) {
  const filteredSchedule = filterItems(schedule, searchQuery);

  if (searchQuery && filteredSchedule.length === 0) {
    return (
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">No classes match your search.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          Today's Schedule
          {searchQuery && (
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({filteredSchedule.length} found)
            </span>
          )}
        </CardTitle>
        <p className="text-sm text-muted-foreground">Friday, December 13, 2024</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredSchedule.map((class_, index) => (
            <div key={class_.id} className="relative">
              {/* Timeline line */}
              {index < filteredSchedule.length - 1 && (
                <div className="absolute left-2 top-8 w-0.5 h-16 bg-border"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Timeline dot */}
                <div className={`w-4 h-4 rounded-full ${class_.dotColor} mt-1 relative z-10 ${class_.current ? 'ring-4 ring-primary/20' : ''}`}></div>
                
                {/* Class details */}
                <div className={`flex-1 p-4 rounded-lg border ${class_.color} ${class_.current ? 'ring-2 ring-primary/40' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {highlightText(class_.course || '', searchQuery)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlightText(class_.name || "", searchQuery)}
                      </p>
                    </div>
                    {class_.current && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{class_.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{highlightText(class_.location, searchQuery)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}