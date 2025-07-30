import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { StatsCards } from "./components/StatsCards";
import { UpcomingAssignments } from "./components/UpcomingAssignments";
import { RecentGrades } from "./components/RecentGrades";
import { TodaysSchedule } from "./components/TodaysSchedule";
import { CoursesPage } from "./components/pages/CoursesPage";
import { AssignmentsPage } from "./components/pages/AssignmentsPage";
import { GradesPage } from "./components/pages/GradesPage";
import { CalendarPage } from "./components/pages/CalendarPage";
import { MessagesPage } from "./components/pages/MessagesPage";
import { SettingsPage } from "./components/pages/SettingsPage";

function AppContent() {
  const [activePage, setActivePage] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const renderPage = () => {
    switch (activePage) {
      case "courses":
        return <CoursesPage />;
      case "assignments":
        return <AssignmentsPage />;
      case "grades":
        return <GradesPage />;
      case "calendar":
        return <CalendarPage />;
      case "messages":
        return <MessagesPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                Good morning, Alex! 👋
              </h1>
              <p className="text-muted-foreground">{currentDate}</p>
              {searchQuery && (
                <div className="mt-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    Showing search results for: <span className="font-semibold">"{searchQuery}"</span>
                  </p>
                </div>
              )}
            </div>
            
            {/* Stats Cards - Only show when not searching */}
            {!searchQuery && (
              <div className="mb-8">
                <StatsCards />
              </div>
            )}
            
            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Left Column - Upcoming Assignments */}
              <UpcomingAssignments searchQuery={searchQuery} />
              
              {/* Right Column - Recent Grades */}
              <RecentGrades searchQuery={searchQuery} />
            </div>
            
            {/* Bottom Section - Today's Schedule */}
            <TodaysSchedule searchQuery={searchQuery} />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}