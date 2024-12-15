import { api } from "@/api";
import HomeRecipeCard from "@/components/custom/HomeRecipeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Recipe } from "@/types/Recipe";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes: Recipe[] = (await api.get("/recipe")).data;
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);

  return (
    <div className="relative min-h-full w-full">
      {/* Background Image */}
      <div className="fixed inset-0">
        <img
          src="./hero-img.webp"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-full flex-col items-center justify-center p-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Recipe Manager
          </h1>
          <p className="text-xl text-white">
            Discover, create, and organize your favorite recipes
          </p>
        </div>

        {/* Featured Recipes Carousel */}
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Featured Recipes
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {recipes.map((recipe) => (
                <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <HomeRecipeCard recipe={recipe} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
