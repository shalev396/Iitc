import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Recipe } from "@/types/Recipe";
import { useNavigate } from "react-router-dom";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
}

export default function RecipeModal({ recipe, isOpen }: RecipeModalProps) {
  const navigate = useNavigate();

  if (!recipe) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        navigate("/recipes");
      }}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
          <DialogDescription>
            {/* <div className="mt-4"> i cant do this becuse  DialogDescription is a fucking <p>*/}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            {/* </div> */}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <p>{recipe.category}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Instructions</h3>
            <p className="whitespace-pre-wrap">{recipe.instructions}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
