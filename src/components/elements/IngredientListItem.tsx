interface IngredientProps {
  content: string;
}

export default function IngredientListItem({ content }: IngredientProps) {
  return <li className="list-disc list-inside">{content}</li>;
}
