import { Helmet } from "react-helmet-async";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image, Video, File, Trash2 } from "lucide-react";

const sampleMedia = [
  {
    id: "1",
    name: "hero-image.jpg",
    type: "image",
    size: "2.4 MB",
    url: "/placeholder.svg",
    uploaded_at: "2024-08-30"
  },
  {
    id: "2",
    name: "tutorial-video.mp4",
    type: "video",
    size: "15.8 MB",
    url: "/placeholder.svg",
    uploaded_at: "2024-08-29"
  },
  {
    id: "3",
    name: "guide.pdf",
    type: "document",
    size: "1.2 MB",
    url: "/placeholder.svg",
    uploaded_at: "2024-08-28"
  }
];

const AdminMedia = () => {
  return (
    <>
      <Helmet>
        <title>Media Library - Admin Panel</title>
        <meta name="description" content="Manage media files" />
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Media Library</h1>
              <p className="text-muted-foreground">Upload and manage your media files</p>
            </div>
            <Button className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Files
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Media</CardTitle>
              <CardDescription>Organize your images, videos, and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sampleMedia.map((file) => (
                  <div key={file.id} className="border border-border rounded-lg overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      {file.type === "image" ? (
                        <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                      ) : file.type === "video" ? (
                        <Video className="h-12 w-12 text-muted-foreground" />
                      ) : (
                        <File className="h-12 w-12 text-muted-foreground" />
                      )}
                    </div>
                    <div className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground text-sm truncate">{file.name}</h4>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p>{file.size}</p>
                        <p>{file.uploaded_at}</p>
                      </div>
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

export default AdminMedia;