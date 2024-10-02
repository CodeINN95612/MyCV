export function SkillsItem({ name, level }: { name: string; level: number }) {
  let percentage = (level * 95) / 3;

  return (
    <div className="flex justify-between items-center pt-1">
      <div className="w-24 bg-gray-400 rounded-full h-2.5">
        <div
          className="bg-accent h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{name}</p>
    </div>
  );
}
