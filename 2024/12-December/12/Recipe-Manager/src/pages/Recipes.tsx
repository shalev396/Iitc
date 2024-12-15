import { api } from "@/api";
import { Recipe } from "@/types/Recipe";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/custom/Card";
import RecipeModal from "../components/custom/RecipeModal";
import { RecipeForm } from "@/components/custom/RecipeForm";
import { SearchAndFilter } from "@/components/custom/SearchAndFilter";

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const fetchRecipes = async () => {
    const allRecipes: Recipe[] = (await api.get("/recipe")).data;
    let filteredRecipes = [...allRecipes];

    const searchTerm = searchParams.get("search")?.toLowerCase();
    if (searchTerm) {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm)
      );
    }

    const category = searchParams.get("category");
    if (category) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.category === category
      );
    }

    setRecipes(filteredRecipes);

    const recipeId = searchParams.get("recipe");
    if (recipeId) {
      const recipe = allRecipes.find((r) => r.id === recipeId);
      setSelectedRecipe(recipe || null);
    } else {
      setSelectedRecipe(null);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Recipes</h1>
          <RecipeForm onSuccess={fetchRecipes} />
        </div>
        <SearchAndFilter />
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!searchParams.get("recipe")}
      />
    </>
  );
}
