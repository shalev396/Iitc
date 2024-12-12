import { api } from "@/api";
import RecipeCard from "@/components/custom/Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Recipe } from "@/types/Recipe";
import { useEffect, useState } from "react";

export default function Background() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes: Recipe[] = (await api.get("/recipe")).data;
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);
  return (
    <div className=" w-full h-[calc(100vh-64px)] overflow-hidden absolute mt-[64px]">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="./hero-img.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex z-10 justify-center ">
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
          {/* Heading and Paragraph */}
          <div className="bg-black bg-opacity-50 px-6 pt-1 pb-2 rounded-md">
            <h1 className=" tablet:text-4xl font-bold text-white mb-4">
              Welcome to Your Dream Platform
            </h1>
            <p className="tablet:text-lg text-white">
              Explore infinite possibilities with our cutting-edge technology.
            </p>
          </div>
          {/* Carousel */}
          <div className="flex justify-center w-11/12 tablet:max-w-full  max-w-[calc(230px)]">
            <Carousel className="w-full max-w-xs ">
              <CarouselContent>
                {recipes.map((recipe) => (
                  <CarouselItem key={recipe.id}>
                    <div className="p-1">
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
