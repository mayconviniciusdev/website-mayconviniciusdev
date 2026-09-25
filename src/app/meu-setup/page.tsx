import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import meuSetup from "./setup";

export const metadata: Metadata = {
  title: { absolute: "Maycon | Meu Setup" },
};

export default function Page() {
  return (
    <main className="bg-[#EDF7F7] px-5 py-8">
      <div className="flex flex-col mx-auto max-w-2xl ">
        <header className="mb-2 py-8">
          <h1 className="text-3xl font-bold tracking-[-0.06em] text-[#004369] sm:text-5xl">Meu Setup</h1>
          <p className="mt-2 max-w-lg leading-6 text-[#004369]/75">Equipamentos que uso no dia a dia para trabalhar, criar e manter foco com qualidade e produtividade.</p>
        </header>

        <section className="rounded-2xl py-6 px-6 bg-[linear-gradient(135deg,#F8FCFC_0%,#EDF7F7_46%,#E4F1F1_100%)] shadow-[0_22px_60px_rgba(0,67,105,0.08)]">
          <div className="mb-6 pb-4 flex flex-col border-b border-[#0E7178]/10  sm:flex-row sm:items-end sm:justify-between">
           <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#0E7178]">Lista de itens</p>
          </div>

          <ul className="grid gap-3">
            {meuSetup.map((item, index) => (
              <li key={index}
              className="p-4 rounded-2xl border border-[#0E7178]/10 shadow-[0_18px_35px_rgba(14,113,120,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0E7178]">
                <div className="flex items-center gap-3">
                  <div className="w-18 relative flex rounded-lg border border-[#0E7178]/10 bg-[#F4F9F9] p-1.5 shadow-inner">
                    <Image
                    src={item.img}
                    alt={item.nome}
                    width={72}
                    height={72}/>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-snug text-[#004369]">{item.nome}</h3>
                  </div>

                  <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#0E7178] px-3 py-2 text-[11px] font-semibold text-[#F6F6F6] shadow-[0_10px_18px_rgba(14,113,120,0.22)] transition-all duration-200 hover:bg-[#0E7178]/90 hover:shadow-[0_12px_22px_rgba(14,113,120,0.28)]"
                  aria-label={`Ver produto ${item.nome}`}>
                    Ver
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3"/>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-10 text-center text-xs text-[#004369]">
          <div className="mb-2 flex items-center justify-center gap-1 text-[#004369]/80">
            Desenvolvido com muito
            <FontAwesomeIcon icon={faMugHot} className="h-3"/>
          </div>

          <span>
            por
            <Link
            href="https://mayconviniciusdev.com/"
            target="_blank"
            className="ml-1 font-bold underline decoration-[#0E7178]/60 underline-offset-2 transition hover:text-[#0E7178]">
              maicoding
            </Link>
          </span>
        </footer>
      </div>
    </main>
  );
}