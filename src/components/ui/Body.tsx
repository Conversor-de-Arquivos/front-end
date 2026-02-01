import { FileText, ArrowLeftRight } from "lucide-react";

export default function Body() {
  return (
    <div className="h-screen w-[50vw] flex items-center justify-center bg-linear-to-tr from-stone-700 to-stone-900">
      <div className="flex flex-col items-center gap-10 text-white">
        <div className="flex flex-row items-center gap-5">
          <div className="flex items-center justify-center p-1 bg-stone-900 rounded-xl w-20 h-20">
            <FileText size={50} />
          </div>
          <ArrowLeftRight size={20} />
          <div className="flex items-center justify-center p-1 bg-stone-900 rounded-xl w-20 h-20">
            <FileText size={50} />
          </div>
        </div>
        <div className="font-serif text-center">
          <h1 className="font-black text-5xl">File Converter</h1>
          <p className="font-extralight text-lg opacity-70">
            Conversor de Arquivos
          </p>
        </div>
      </div>
    </div>
  );
}
