import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import api from "../../api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const POSTS_PER_PAGE = 6;

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { toast } = useToast();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["posts", page, searchTerm],
    queryFn: () =>
      api
        .get("/posts", {
          params: {
            page,
            limit: POSTS_PER_PAGE,
            search: searchTerm,
          },
        })
        .then((res) => res.data),
  });

  const handleSearch = () => {
    setSearchTerm(searchQuery);
    setPage(1);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data || !data.posts) return <div>No posts found</div>;

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/posts/${id}`);
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link to="/create">Create New Post</Link>
        </Button>
      </div>

      <div className="flex gap-2 max-w-md">
        <Input
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post: any) => (
          <BlogCard
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {data.totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setPage(page + 1)}
            disabled={page === data.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
