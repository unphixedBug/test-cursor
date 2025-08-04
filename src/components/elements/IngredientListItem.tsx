interface IngredientProps {
  content: string;
}

export default function IngredientListItem({ content }: IngredientProps) {
  return <li>{content}</li>;
}
