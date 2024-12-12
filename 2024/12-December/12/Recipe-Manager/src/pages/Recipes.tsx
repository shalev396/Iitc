import { api } from "@/api";
import { Recipe } from "@/types/Recipe";
import { useEffect, useState } from "react";
import RecipeCard from "../components/custom/Card";

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes: Recipe[] = (await api.get("/recipe")).data;
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* inner page */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
