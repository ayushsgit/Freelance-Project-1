import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ClipboardCheck, GraduationCap, MessageSquare, Bell, Check, X, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'assignment' | 'grade' | 'message' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
  priority: 'low' | 'medium' | 'high';
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'assignment',
    title: 'Assignment Due Soon',
    message: 'Database Design Project is due in 2 days',
    time: '2 hours ago',
    read: false,
    priority: 'high',
  },
  {
    id: '2',
    type: 'grade',
    title: 'New Grade Posted',
    message: 'Data Structures Midterm: A- (92%)',
    time: '4 hours ago',
    read: false,
    priority: 'medium',
  },
  {
    id: '3',
    type: 'message',
    title: 'Message from Dr. Smith',
    message: 'Great work on your recent assignment!',
    time: '1 day ago',
    read: false,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    priority: 'low',
  },
  {
    id: '4',
    type: 'system',
    title: 'Schedule Update',
    message: 'CS 340 class moved to Room KEC 1007',
    time: '2 days ago',
    read: true,
    priority: 'medium',
  },
  {
    id: '5',
    type: 'message',
    title: 'Study Group Reminder',
    message: 'Algorithm study group meeting at 7 PM',
    time: '2 days ago',
    read: true,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    priority: 'low',
  },
];

const typeIcons = {
  assignment: ClipboardCheck,
  grade: GraduationCap,
  message: MessageSquare,
  system: Bell,
};

const typeColors = {
  assignment: 'text-orange-600 dark:text-orange-400',
  grade: 'text-green-600 dark:text-green-400',
  message: 'text-blue-600 dark:text-blue-400',
  system: 'text-purple-600 dark:text-purple-400',
};

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  unreadCount: number;
}

export function NotificationDropdown({ isOpen, onClose }: NotificationDropdownProps) {
  const [notificationList, setNotificationList] = useState(notifications);

  const markAsRead = (id: string) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      {/* Dropdown */}
      <Card className="absolute right-0 top-full mt-2 w-96 max-h-96 overflow-hidden z-50 border border-border shadow-lg">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                {notificationList.filter(n => !n.read).length} new
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Mark all read
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-0 max-h-80 overflow-y-auto">
          {notificationList.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          ) : (
            <div className="space-y-0">
              {notificationList.map((notification) => {
                const Icon = typeIcons[notification.type];
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors ${
                      !notification.read ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>
                              <Icon className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                            <Icon className={`h-4 w-4 ${typeColors[notification.type]}`} />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm text-foreground">
                            {notification.title}
                          </p>
                          <div className="flex items-center space-x-1">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                              >
                                <Check className="h-3 w-3" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="h-6 w-6 p-0 text-muted-foreground hover:text-red-600"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
        
        {notificationList.length > 0 && (
          <div className="p-3 border-t border-border">
            <Button variant="ghost" size="sm" className="w-full text-sm text-muted-foreground hover:text-foreground">
              View all notifications
            </Button>
          </div>
        )}
      </Card>
    </>
  );
}