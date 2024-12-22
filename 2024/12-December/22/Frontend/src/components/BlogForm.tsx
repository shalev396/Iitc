import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BlogFormData {
  title: string;
  content: string;
}

interface BlogFormProps {
  initialData?: BlogFormData;
  onSubmit: (data: BlogFormData) => void;
  isLoading: boolean;
}

export default function BlogForm({
  initialData,
  onSubmit,
  isLoading,
}: BlogFormProps) {
  const { register, handleSubmit } = useForm<BlogFormData>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title", { required: true })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          {...register("content", { required: true })}
          className="min-h-[200px]"
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Post"}
      </Button>
    </form>
  );
}
