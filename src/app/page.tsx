import Image from "next/image";
import { TypewriterEffect } from "./components/ui/TypeWriter";

export default function Home() {
  const words = [
    {
      text: "Aku",
    },
    {
      text: "suka",
    },
    {
      text: "memakan",
    },
    {
      text: "meja",
    },
    {
      text: "Bekas",
      className: "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b]">
      <div className="wrapper flex flex-col gap-4 items-center justify-center">
        <span className="text-xl tracking-wide text-gray-50">Kamu mau juga?</span>
        <TypewriterEffect words={words} className="" cursorClassName="" />

        <div className="mt-4 flex gap-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[120px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Join us
            </span>
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[120px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Scroll down
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
