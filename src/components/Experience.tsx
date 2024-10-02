import { personalInfo } from "../data";

export function Experience() {
  return (
    <>
      <h3 className="text-xl font-bold">EXPERIENCE</h3>
      <div className="flex flex-col gap-4 pt-1">
        {personalInfo.workExperience.map((experience) => (
          <div key={experience.company} className="flex flex-col">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold">{experience.company}</h4>
              {"-"}
              <p>{experience.title}</p>
            </div>
            <p className="text-sm">{experience.years}</p>
            <p className="text-justify">{experience.description}</p>
            <div className="flex gap-2 pt-1 text-sm">
              {experience.stack.map((stack) => (
                <div
                  key={stack}
                  className="border-accent rounded-md border min-w-10 px-2 py-1 text-center"
                >
                  <p>{stack}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
