import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { PrintButton } from "../components/PrintButton";

const A4_WIDTH = "210mm";
const A4_HEIGHT = "297mm";

export function CV() {
  const cvref = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => cvref.current,
  });

  return (
    <div style={{ width: A4_WIDTH, height: A4_HEIGHT }}>
      <PrintButton onPrint={handlePrint} />
      <div className="w-full h-full flex flex-col" ref={cvref}>
        <Header />
        <Info />
      </div>
    </div>
  );
}
