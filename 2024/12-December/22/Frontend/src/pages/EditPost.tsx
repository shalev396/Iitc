import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import BlogForm from "@/components/BlogForm";
import api from "../../api";
import { useToast } from "@/hooks/use-toast";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => api.get(`/posts/${id}`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (data: { title: string; content: string }) =>
      api.put(`/posts/${id}`, data),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Post updated successfully",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update post",
        variant: "destructive",
      });
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <BlogForm
        initialData={post}
        onSubmit={(data) => mutation.mutate(data)}
        isLoading={mutation.isPending}
      />
    </div>
  );
}
