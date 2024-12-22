import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DeleteAlert from "@/components/DeleteAlert";
import { useToast } from "@/hooks/use-toast";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  onDelete: (id: string) => void;
}

export default function BlogCard({
  id,
  title,
  content,
  onDelete,
}: BlogCardProps) {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/post/${id}`}>Read More</Link>
        </Button>
        <div className="space-x-2">
          <Button variant="secondary" asChild>
            <Link to={`/edit/${id}`}>Edit</Link>
          </Button>
          <DeleteAlert onConfirm={() => onDelete(id)} />
        </div>
      </CardFooter>
    </Card>
  );
}
