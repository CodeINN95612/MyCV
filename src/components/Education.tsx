import { personalInfo } from "../data";

export function Education() {
  return (
    <div className="w-full pt-4">
      <h3 className="text-xl text-right font-semibold">EDUCATION</h3>
      {personalInfo.education.map((e, i) => (
        <div key={i} className="grid gap-1 align-middle pt-1 text-right">
          <h4>{e.degree}</h4>
          <p>{e.school}</p>
          <p>{e.years}</p>
          <p>{e.location}</p>
        </div>
      ))}
    </div>
  );
}
