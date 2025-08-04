interface NutritionElemProps {
  label: string;
  value: string;
}

export default function NutritionElem({ label, value }: NutritionElemProps) {
  return (
    <tr className="border-b border-gray-200">
      <th scope="row" className="font-medium">
        {label}
      </th>
      <td className="text-brown-800 font-bold">{value}</td>
    </tr>
  );
}
