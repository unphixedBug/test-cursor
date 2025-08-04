interface InstructionsProps {
  instruction: string;
  details?: string;
}

export default function Instructions({
  instruction,
  details,
}: InstructionsProps) {
  return (
    <li className="list-decimal list-inside font-bold">
      {instruction}:
      {details && <span className="text-gray-500 font-medium"> {details}</span>}
    </li>
  );
}
