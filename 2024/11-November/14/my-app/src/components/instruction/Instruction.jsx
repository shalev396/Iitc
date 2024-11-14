import React from "react";
import "./Instruction.css";
export default function Instruction() {
  return (
    <div className="instruction">
      <h2>Instructions</h2>
      <p>
        Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper
        until they are well mixed. You can add a tablespoon of water or milk for
        a fluffier texture.
      </p>
      <p>
        {" "}
        Heat the pan: Place a non-stick frying pan over medium heat and add
        butter or oil.
      </p>
      <p>
        Cook the omelette: Once the butter is melted and bubbling, pour in the
        eggs. Tilt the pan to ensure the eggs evenly coat the surface.
      </p>
      <p>
        Add fillings (optional): When the eggs begin to set at the edges but are
        still slightly runny in the middle, sprinkle your chosen fillings over
        one half of the omelette.
      </p>
      <p>
        Fold and serve: As the omelette continues to cook, carefully lift one
        edge and fold it over the fillings. Let it cook for another minute, then
        slide it onto a plate.
      </p>
      <p>Enjoy: Serve hot, with additional salt and pepper if needed.</p>
      <p></p>
    </div>
  );
}
