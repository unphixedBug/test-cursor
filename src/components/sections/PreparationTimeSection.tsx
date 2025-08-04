import PrepTimeElems from "../elements/PrepTimeElems";

export default function PreparationTimeSection() {
  return (
    <div className="flex flex-col gap-2 bg-rose-50 p-5 rounded-lg">
      <h3 className="text-rose-800 font-semibold text-xl">Preparation Time</h3>
      <ul className="custom-bullet-list">
        <PrepTimeElems section="Total" time="Approximately 10 minutes" />
        <PrepTimeElems section="Preparation" time="5 minutes" />
        <PrepTimeElems section="Cooking" time="5 minutes" />
      </ul>
    </div>
  );
}
