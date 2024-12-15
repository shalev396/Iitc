import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { Recipe } from "@/types/Recipe";

export default function HomeRecipeCard({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded mt-4"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button
          variant="secondary"
          onClick={() => navigate(`/recipes?recipe=${recipe.id}`)}
        >
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
}
