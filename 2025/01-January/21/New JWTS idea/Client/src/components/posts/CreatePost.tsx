import { useState, FormEvent, ChangeEvent } from "react";
import { createPost } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Post {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  likes: string[];
  comments: {
    _id: string;
    content: string;
    author: {
      _id: string;
      username: string;
    };
    likes: string[];
    createdAt: string;
  }[];
  createdAt: string;
}

interface CreatePostProps {
  onPostCreated: (post: Post) => void;
}

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const newPost = (await createPost(content)) as Post;
      onPostCreated(newPost);
      setContent("");
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to create post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Textarea
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              placeholder="What's on your mind?"
              className="min-h-[100px]"
            />
            {error && <div className="text-sm text-red-500">{error}</div>}
            <Button type="submit" disabled={isLoading || !content.trim()}>
              {isLoading ? "Posting..." : "Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
