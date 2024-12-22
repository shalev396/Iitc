import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import api from "../../api";

export default function ViewPost() {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => api.get(`/posts/${id}`).then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <Button variant="outline" asChild>
          <Link to="/">Back to Posts</Link>
        </Button>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content}
      </div>
    </div>
  );
}
