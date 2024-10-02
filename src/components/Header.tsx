import { personalInfo } from "../data";

export function Header() {
  return (
    <div className="pt-5 pb-7 w-full p-autos bg-header flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl">{personalInfo.name}</h1>
      <h2 className=" pt-3 text-3xl italic">
        {personalInfo.title.toUpperCase()}
      </h2>
    </div>
  );
}
