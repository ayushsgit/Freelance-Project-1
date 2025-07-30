import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  Home, 
  BookOpen, 
  ClipboardCheck, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Settings 
} from "lucide-react";

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "courses", icon: BookOpen, label: "Courses" },
  { id: "assignments", icon: ClipboardCheck, label: "Assignments" },
  { id: "grades", icon: BarChart3, label: "Grades" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "messages", icon: MessageSquare, label: "Messages" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <div className="w-60 bg-background border-r border-border h-screen flex flex-col">
      {/* User Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face" alt="Alex Johnson" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-foreground">Alex Johnson</h3>
            <p className="text-xs text-muted-foreground">Computer Science</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.label}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}