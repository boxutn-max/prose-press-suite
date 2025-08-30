import { Helmet } from "react-helmet-async";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye, Trash2 } from "lucide-react";

const sampleComments = [
  {
    id: "1",
    author: "Alice Johnson",
    email: "alice@example.com",
    content: "Great article! Really helpful for beginners.",
    post: "Getting Started with React",
    status: "approved",
    created_at: "2024-08-30T10:30:00Z"
  },
  {
    id: "2",
    author: "Bob Smith",
    email: "bob@example.com",
    content: "I disagree with some points made here. Could you elaborate on the TypeScript section?",
    post: "Best Practices for Web Development",
    status: "pending",
    created_at: "2024-08-30T09:15:00Z"
  },
  {
    id: "3",
    author: "Charlie Brown",
    email: "charlie@example.com",
    content: "This is spam content with promotional links...",
    post: "Advanced TypeScript Techniques",
    status: "spam",
    created_at: "2024-08-30T08:45:00Z"
  }
];

const AdminComments = () => {
  return (
    <>
      <Helmet>
        <title>Comments Management - Admin Panel</title>
        <meta name="description" content="Manage blog comments" />
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Comments</h1>
            <p className="text-muted-foreground">Moderate and manage user comments</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Comments</CardTitle>
              <CardDescription>Review and moderate user comments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleComments.map((comment) => (
                  <div key={comment.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{comment.author}</h4>
                          <p className="text-sm text-muted-foreground">{comment.email}</p>
                        </div>
                        <Badge 
                          variant={
                            comment.status === "approved" ? "default" :
                            comment.status === "pending" ? "secondary" : "destructive"
                          }
                        >
                          {comment.status}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        {comment.status === "pending" && (
                          <>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-foreground mb-3">{comment.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>On: {comment.post}</span>
                      <span>•</span>
                      <span>{new Date(comment.created_at).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminComments;