interface NutritionElemProps {
  label: string;
  value: string;
}

export default function NutritionElem({ label, value }: NutritionElemProps) {
  return (
    <tr className="border-b border-gray-200">
      <th scope="row" className="font-medium text-left py-3 px-4">
        {label}
      </th>
      <td className="text-brown-800 font-bold py-3 px-4">{value}</td>
    </tr>
  );
}
