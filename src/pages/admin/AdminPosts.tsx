import { Helmet } from "react-helmet-async";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const samplePosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    status: "published",
    author: "John Doe",
    published_at: "2024-08-30",
    views: 1245,
    comments: 12
  },
  {
    id: "2",
    title: "Best Practices for Web Development",
    status: "draft",
    author: "Jane Smith",
    published_at: "2024-08-29",
    views: 856,
    comments: 8
  },
  {
    id: "3",
    title: "Advanced TypeScript Techniques",
    status: "scheduled",
    author: "Mike Johnson",
    published_at: "2024-09-01",
    views: 0,
    comments: 0
  }
];

const AdminPosts = () => {
  return (
    <>
      <Helmet>
        <title>Posts Management - Admin Panel</title>
        <meta name="description" content="Manage blog posts" />
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Posts</h1>
              <p className="text-muted-foreground">Manage your blog posts</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>Manage and organize your blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {samplePosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">{post.title}</h3>
                        <Badge 
                          variant={
                            post.status === "published" ? "default" :
                            post.status === "draft" ? "secondary" : "outline"
                          }
                        >
                          {post.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.views} views</span>
                        <span>•</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

export default AdminPosts;