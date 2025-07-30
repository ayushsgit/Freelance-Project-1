import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Send, MessageCircle } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Dr. Smith",
    role: "Professor - CS 261",
    lastMessage: "Great work on your recent assignment!",
    time: "2 hours ago",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Study Group - Algorithms",
    role: "Group Chat",
    lastMessage: "Meeting tomorrow at 7 PM in the library",
    time: "4 hours ago",
    unread: 3,
    avatar: null,
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Classmate - CS 340",
    lastMessage: "Can you help me with the database project?",
    time: "1 day ago",
    unread: 1,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Dr. Johnson",
    role: "Professor - CS 340",
    lastMessage: "Office hours this week are Tuesday 2-4 PM",
    time: "2 days ago",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  },
];

export function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Messages</h1>
        <p className="text-muted-foreground">Stay connected with professors and classmates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card className="border border-border h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground">Conversations</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {conversations.filter(c => c.unread > 0).length} unread
                </Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-2 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors border border-transparent hover:border-border"
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      {conversation.avatar ? (
                        <AvatarImage src={conversation.avatar} alt={conversation.name} />
                      ) : (
                        <AvatarFallback>
                          {conversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground text-sm truncate">{conversation.name}</h4>
                        {conversation.unread > 0 && (
                          <Badge className="h-5 w-5 p-0 flex items-center justify-center text-xs bg-blue-500 hover:bg-blue-500">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{conversation.role}</p>
                      <p className="text-sm text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conversation.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Message Area */}
        <div className="lg:col-span-2">
          <Card className="border border-border h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Dr. Smith" />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">Dr. Smith</h3>
                  <p className="text-sm text-muted-foreground">Professor - CS 261</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 space-y-4 py-4">
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-foreground">Great work on your recent assignment! Your implementation of the binary search tree was excellent.</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-primary-foreground">Thank you so much! I really enjoyed working on that project.</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a message..."
                    className="flex-1"
                  />
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}