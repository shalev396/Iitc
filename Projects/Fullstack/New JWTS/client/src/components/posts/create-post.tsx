import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/types";

interface CreatePostProps {
  user: User;
  onPostCreated: (content: string) => void;
}

export function CreatePost({ user, onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    onPostCreated(content);
    setContent("");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={user.profilePic} />
          <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{user.username}</span>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={!content.trim()}>
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
