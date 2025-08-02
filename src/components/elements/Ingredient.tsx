interface IngredientProps {
  content: string;
}

export default function Ingredient({ content }: IngredientProps) {
  return <li className="list-disc list-inside">{content}</li>;
}
