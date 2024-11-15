import React from "react";
import "./Ingredients.css";
export default function Ingredients() {
  return (
    <div className="ingredients">
      <h2 className="subtitle-ingredients">Ingredients</h2>
      <ul className="ul-ingredients">
        <li className="li-ingredients">2-3 large eggs</li>
        <li className="li-ingredients">Salt, to taste</li>
        <li className="li-ingredients">Pepper, to taste</li>
        <li className="li-ingredients">1 tablespoon of butter or oil</li>
        <li className="li-ingredients">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}
