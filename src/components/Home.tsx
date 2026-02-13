import { FileText, LayoutGrid, Zap, HistoryIcon, Share2 } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
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
  );
}
