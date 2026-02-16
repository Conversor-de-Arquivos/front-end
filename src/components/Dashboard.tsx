import {
  FileText,
  LayoutGrid,
  Zap,
  HistoryIcon,
  Share2,
  Sun,
  Moon,
  Upload,
} from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [theme, setTheme] = useState("dark");

  function handleSetTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <Sidebar>
        <div className="flex flex-row justify-center items-center mt-10 gap-3">
          <span className="flex items-center justify-center p-1 bg-stone-600 rounded-xl w-18 h-18">
            <FileText className="text-white" size={50} />
          </span>
          <h1 className="text-white font-black text-2xl">File Converter</h1>
        </div>
        <div className="flex flex-col items-start mt-10 ml-5">
          <div className="flex flex-row text-white w-[14vw] p-2 gap-3 rounded-xl hover:duration-300 hover:bg-stone-600 hover:cursor-pointer">
            <span>
              <LayoutGrid size={25} />
            </span>
            <button className="hover:cursor-pointer">Dashboard</button>
          </div>
          <div className="flex flex-row text-white w-[14vw] p-2 gap-3 rounded-xl hover:duration-300 hover:bg-stone-600 hover:cursor-pointer">
            <span>
              <Zap size={25} />
            </span>
            <button className="hover:cursor-pointer">Workflows</button>
          </div>
          <div className="flex flex-row text-white w-[14vw] p-2 gap-3 rounded-xl hover:duration-300 hover:bg-stone-600 hover:cursor-pointer">
            <span>
              <HistoryIcon size={25} />
            </span>
            <button className="hover:cursor-pointer">Histórico</button>
          </div>
          <div className="flex flex-row text-white w-[14vw] p-2 gap-3 rounded-xl hover:duration-300 hover:bg-stone-600 hover:cursor-pointer">
            <span>
              <Share2 size={25} />
            </span>
            <button className="hover:cursor-pointer">Colaboração</button>
          </div>
        </div>
        <div className="flex flex-col w-fit items-center rounded-lg p-3 mt-auto mx-auto mb-5 text-white bg-stone-900 opacity-90">
          <h3 className="opacity-70">Status do Sistema</h3>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse" />
            <p className="font-black">Servidores Online</p>
          </div>
        </div>
      </Sidebar>
      <div className="flex flex-col w-full bg-zinc-100">
        <div className="flex flex-row justify-between mt-4 mx-6">
          <div>
            {/* TODO: Dynamically display the logged user's name... */}
            <h1 className="text-3xl font-bold">Bem-vindo, User!</h1>
            <p className="opacity-80">O que vamos converter hoje?</p>
          </div>
          <span className="flex items-center justify-center p-1 bg-stone-950 rounded-xl w-12 h-12 hover:cursor-pointer hover:bg-stone-500">
            {/* TODO: Change UI theme accordingly to the current state... */}
            <button onClick={handleSetTheme} className="hover:cursor-pointer">
              {theme === "dark" ? (
                <Sun className="text-white" size={30} />
              ) : (
                <Moon className="text-white" size={30} />
              )}
            </button>
          </span>
        </div>
        <div className="flex flex-col m-auto w-[75vw] h-[75vh] rounded-3xl border-3 border-dashed border-zinc-400 bg-zinc-200 group hover:border-black">
          <div className="flex flex-row justify-end mt-2.5 mr-5 gap-2.5 text-white">
            {/* TODO: Change avaiable file conversion types later... */}
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-red-500/20 text-red-500 border border-red-500/30">
              PDF
            </span>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-500 border border-blue-500/30">
              DOCX
            </span>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange-500/20 text-orange-500 border border-orange-500/30">
              WEBP
            </span>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <span className="flex items-center justify-center p-1 bg-stone-950 rounded-xl w-30 h-30 group-hover:w-35 group-hover:h-35">
              <Upload className="text-white" size={100} />
            </span>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-2xl opacity-80">
                Arraste seus arquivos aqui!
              </h2>
              {/* Change this text accordingly to the project functionalities. */}
              <p>Suporta PDF, imagens, Vídeos e mais.</p>
              <p className="opacity-80">Até 2GB por arquivo.</p>
            </div>
            <button className="font-semibold text-white p-3 bg-stone-950 rounded-lg cursor-pointer hover:bg-stone-800">
              Selecionar Arquivos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
