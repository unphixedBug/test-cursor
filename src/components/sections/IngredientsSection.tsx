import Ingredient from "../elements/IngredientListItem";
import Title from "../elements/Title";

export default function IngredientsSection() {
  return (
    <div className="flex flex-col gap-2">
      <Title content="Ingredients" titleLevel={2} />
      <ol>
        <Ingredient content="2-3 large egs" />
        <Ingredient content="Salt, to taste" />
        <Ingredient content="Pepper, to taste" />
        <Ingredient content="1 tablespoon of butter or oil" />
        <Ingredient content="Optional fillings: cheese, diced vegetables, cooked meats, herbs" />
      </ol>
    </div>
  );
}
