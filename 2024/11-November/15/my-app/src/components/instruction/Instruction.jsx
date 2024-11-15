import React from "react";
import "./Instruction.css";
export default function Instruction() {
  return (
    <div className="instruction">
      <h2 className="subtitle-instruction">Instructions</h2>
      <ul className="ul-instruction">
        <li className="li-instruction">
          <span className="instruction-highlight">Beat the eggs</span>: In a
          bowl, beat the eggs with a pinch of salt and pepper until they are
          well mixed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className="li-instruction">
          <span className="instruction-highlight">Heat the pan</span>: Place a
          non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="li-instruction">
          <span className="instruction-highlight">Cook the omelette</span>: Once
          the butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li className="li-instruction">
          <span className="instruction-highlight">Add fillings (optional)</span>
          : When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="li-instruction">
          <span className="instruction-highlight">Fold and serve</span>: As the
          omelette continues to cook, carefully lift one edge and fold it over
          the fillings. Let it cook for another minute, then slide it onto a
          plate.
        </li>
        <li className="li-instruction">
          <span className="instruction-highlight">Enjoy</span>: Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ul>
    </div>
  );
}
