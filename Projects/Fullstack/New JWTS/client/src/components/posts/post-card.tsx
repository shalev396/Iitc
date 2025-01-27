import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Post, User } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import * as api from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

interface PostCardProps {
  post: Post;
  currentUser: User;
  onPostUpdated: () => void;
}

export function PostCard({ post, currentUser, onPostUpdated }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser._id));
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { toast } = useToast();

  const handleLike = async () => {
    try {
      await api.likePost(post.id);
      setIsLiked(!isLiked);
      onPostUpdated();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to like post",
        variant: "destructive",
      });
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      await api.addComment(post.id, newComment);
      setNewComment("");
      onPostUpdated();
      toast({
        title: "Success",
        description: "Comment added successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to add comment",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    try {
      await api.sharePost(post.id);
      onPostUpdated();
      toast({
        title: "Success",
        description: "Post shared successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to share post",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={post.author.profilePic} />
          <AvatarFallback>
            {post.author.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-semibold">{post.author.username}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg break-words">{post.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-between w-full">
          <Button
            variant="ghost"
            size="sm"
            className={`${isLiked ? "text-red-500" : ""} flex-1`}
            onClick={handleLike}
          >
            <Heart className="mr-2 h-4 w-4" />
            {post.likes.length}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {post.comments.length}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1"
            onClick={handleShare}
          >
            <Share2 className="mr-2 h-4 w-4" />
            {post.shares}
          </Button>
        </div>

        {showComments && (
          <div className="w-full space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src={comment.author.profilePic} />
                  <AvatarFallback>
                    {comment.author.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {comment.author.username}
                  </p>
                  <p className="text-sm break-words">{comment.content}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-start space-x-4">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={currentUser.profilePic} />
                <AvatarFallback>
                  {currentUser.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 space-y-2">
                <Textarea
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px] w-full"
                />
                <Button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  size="sm"
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
