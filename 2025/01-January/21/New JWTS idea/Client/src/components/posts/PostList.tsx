import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  getPosts,
  getUserPosts,
  likePost,
  addComment,
  likeComment,
} from "@/services/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Author {
  _id: string;
  username: string;
}

interface Comment {
  _id: string;
  content: string;
  author: Author;
  likes: string[];
  createdAt: string;
}

interface Post {
  _id: string;
  content: string;
  author: Author;
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

interface PostListProps {
  userId?: string;
}

export function PostList({ userId }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newComments, setNewComments] = useState<{ [key: string]: string }>({});
  const { user } = useAuth();

  useEffect(() => {
    loadPosts();
  }, [userId]);

  const loadPosts = async () => {
    try {
      const data = userId
        ? ((await getUserPosts(userId)) as Post[])
        : ((await getPosts()) as Post[]);
      setPosts(data);
    } catch (err: any) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  const handleLikePost = async (postId: string) => {
    try {
      const updatedPost = (await likePost(postId)) as Post;
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
    } catch (err) {
      setError("Failed to like post");
    }
  };

  const handleAddComment = async (postId: string) => {
    const content = newComments[postId];
    if (!content?.trim()) return;

    try {
      const updatedPost = (await addComment(postId, content)) as Post;
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
      setNewComments({ ...newComments, [postId]: "" });
    } catch (err) {
      setError("Failed to add comment");
    }
  };

  const handleLikeComment = async (postId: string, commentId: string) => {
    try {
      const updatedPost = (await likeComment(postId, commentId)) as Post;
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
    } catch (err) {
      setError("Failed to like comment");
    }
  };

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post._id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Link
                to={`/profile/${post.author._id}`}
                className="font-semibold hover:underline"
              >
                {post.author.username}
              </Link>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{post.content}</p>
            <div className="mt-4">
              <Button
                variant={
                  post.likes.includes(user?._id || "") ? "default" : "outline"
                }
                size="sm"
                onClick={() => handleLikePost(post._id)}
              >
                {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="w-full flex space-x-2">
              <Input
                value={newComments[post._id] || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewComments({ ...newComments, [post._id]: e.target.value })
                }
                placeholder="Write a comment..."
              />
              <Button onClick={() => handleAddComment(post._id)}>
                Comment
              </Button>
            </div>
            <div className="w-full space-y-2">
              {post.comments.map((comment) => (
                <div key={comment._id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/profile/${comment.author._id}`}
                      className="font-semibold hover:underline"
                    >
                      {comment.author.username}
                    </Link>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                  <Button
                    variant={
                      comment.likes.includes(user?._id || "")
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    className="mt-2"
                    onClick={() => handleLikeComment(post._id, comment._id)}
                  >
                    {comment.likes.length}{" "}
                    {comment.likes.length === 1 ? "Like" : "Likes"}
                  </Button>
                </div>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
