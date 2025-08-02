interface PrepTimeElemsProps {
  section: string;
  time: string;
}

export default function PrepTimeElems({ section, time }: PrepTimeElemsProps) {
  return (
    <li>
      <b>{section}:</b> {time}
    </li>
  );
}
