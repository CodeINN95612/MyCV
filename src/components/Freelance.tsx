import { personalInfo } from "../data";

export function Freelance() {
  return (
    <>
      <h3 className="text-xl font-bold pt-4">FREELANCE</h3>
      <div className="flex flex-col gap-4 pt-1">
        {personalInfo.freelance.map((fl) => (
          <div key={fl.project} className="flex flex-col">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold">{fl.project}</h4>
            </div>
            <p className="text-sm">Duration: {fl.duration}</p>
            <p className="text-justify">{fl.description}</p>
            <div className="flex gap-2 pt-1 text-sm">
              {fl.stack.map((stack) => (
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
