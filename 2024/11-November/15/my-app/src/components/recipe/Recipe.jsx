import React from "react";
import PrepTime from "../prepTime/PrepTime";
import Ingredients from "../ingredients/Ingredients";
import Instruction from "../instruction/Instruction";
import Nutrition from "../nutrition/Nutrition";
import "./Recipe.css";
export default function Recipe() {
  return (
    <div className="recipe">
      <PrepTime />
      <Ingredients />
      <Instruction />
      <Nutrition />
    </div>
  );
}
