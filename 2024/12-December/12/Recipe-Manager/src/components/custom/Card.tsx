import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeleteRecipeDialog } from "./DeleteRecipeDialog";

import type { Recipe } from "@/types/Recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>
          <img
            src={recipe.image}
            className="max-w-auto max-h-auto rounded mt-8"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col ">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Show ingredients</Button>
          </PopoverTrigger>
          <PopoverContent>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={"i" + ingredient}>{ingredient}</li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </CardContent>
      <CardFooter className="flex-col flex tablet:flex-row-reverse justify-between ">
        <Button variant="like"> Add to Favorite </Button>
        <Button
          variant="secondary"
          onClick={() => navigate(`/recipes?recipe=${recipe.id}`)}
        >
          Show instructions
        </Button>
        <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
          Delete
        </Button>
      </CardFooter>
      <DeleteRecipeDialog
        isOpen={showDeleteDialog}
        recipeId={recipe.id}
        recipeName={recipe.title}
        onClose={() => setShowDeleteDialog(false)}
        onDelete={() => {
          setShowDeleteDialog(false);
          // Trigger recipe list refresh
          window.location.reload();
        }}
      />
    </Card>
  );
}
