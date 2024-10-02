import { Printer } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PrintButton({ onPrint }: { onPrint: any }) {
  return (
    <button
      className="fixed bottom-5 right-5 bg-header text-white p-2 rounded"
      onClick={onPrint}
    >
      <Printer size={24} />
    </button>
  );
}
