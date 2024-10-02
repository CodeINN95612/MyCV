import { personalInfo } from "../data";
import { SkillsItem } from "./SkillsItem";

export function Skills() {
  return (
    <div className="w-full pt-4">
      <h3 className="text-xl text-right font-semibold">SKILLS</h3>
      {personalInfo.skills.map((s, i) => (
        <SkillsItem key={i} name={s.name} level={s.level} />
      ))}
    </div>
  );
}
