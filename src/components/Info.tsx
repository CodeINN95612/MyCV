import { Experience } from "./Experience";
import { Freelance } from "./Freelance";
import { Sidebar } from "./Sidebar";

export function Info() {
  return (
    <>
      <div className="w-full flex flex-auto">
        <Sidebar />
        <div className="p-4 pr-10 bg-white text-black flex flex-col">
          <Experience />
          <Freelance />
          <p className="pt-24 text-white">.</p>
        </div>
      </div>
    </>
  );
}
