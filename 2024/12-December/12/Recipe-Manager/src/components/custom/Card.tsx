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

import type { Recipe } from "@/types/Recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
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
        <Button variant="secondary">Show instructions</Button>
      </CardFooter>
    </Card>
  );
}
