import Instructions from "../elements/Instructions";
import Title from "../elements/Title";

export default function InstructionsSection() {
  return (
    <div>
      <Title content="Instructions" titleLevel={2} />
      <ol>
        <Instructions
          instruction="Beat the eggs"
          details="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed, You can add a tablespoon of water or milk for a fluffier texture."
        />
        <Instructions
          instruction="Heat the pan"
          details="Place a non-stick frying pan over medium heat and add butter or oil."
        />
        <Instructions
          instruction="Cook the omelette"
          details="Once the butter is malted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
        />
        <Instructions
          instruction="Add fillings (optional)"
          details="When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
        />
        <Instructions
          instruction="Fold and serve"
          details="As the omlette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minutes, then slide it onto a place."
        />
        <Instructions
          instruction="Enjoy"
          details="Serve hot, with additional salt and pepper if needed."
        />
      </ol>
    </div>
  );
}
