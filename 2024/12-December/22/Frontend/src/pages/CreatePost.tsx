import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import BlogForm from "@/components/BlogForm";
import api from "../../api";
import { useToast } from "@/hooks/use-toast";

export default function CreatePost() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: { title: string; content: string }) =>
      api.post("/posts", data),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Post created successfully",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <BlogForm
        onSubmit={(data) => mutation.mutate(data)}
        isLoading={mutation.isPending}
      />
    </div>
  );
}
