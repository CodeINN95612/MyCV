import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Languages } from "./Languages";
import { Skills } from "./Skills";

export function Sidebar() {
  return (
    <div className="p-4 pl-6 bg-sidebar text-black">
      <Contact />
      <Education />
      <Skills />
      <Languages />
      <Certifications />
    </div>
  );
}
