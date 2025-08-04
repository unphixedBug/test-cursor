import NutritionElem from "../elements/NutritionElem";
import Title from "../elements/Title";

export default function NutritionSection() {
  return (
    <div>
      <Title content="Nutrition" titleLevel={2} />
      <p>
        The table below shows nutritional values per serving without the
        additional filings.
      </p>
      <table className="w-full">
        <tbody>
          <NutritionElem label="Calories" value="277kcal" />
          <NutritionElem label="Carbs" value="0g" />
          <NutritionElem label="Protein" value="20g" />
          <NutritionElem label="Fat" value="22g" />
        </tbody>
      </table>
    </div>
  );
}
