import { personalInfo } from "../data";

export function Certifications() {
  return (
    <div className="w-full pt-4">
      <h3 className="text-xl text-right font-semibold">CERTIFICATIONS</h3>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {personalInfo.certifications.map((cert, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
          >
            <div>
              <p className="text-sm font-medium">{cert.name}</p>
              <p className="text-xs text-gray-600">{cert.company}</p>
            </div>
            <p className="text-xs text-gray-500">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
