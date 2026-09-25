import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLaptop, faLink, faMugHot } from "@fortawesome/free-solid-svg-icons";

import { SocialLinktree } from "../../components/ui/links";

export const metadata: Metadata = {
  title: { absolute: "Maycon | Linktree" },
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(14,113,120,0.9),_rgba(14,113,120,0.76)_20%,_rgba(240,246,246,1)_78%)] px-4 py-8">
      <div className="w-full max-w-md">
        <div className="px-6 py-4">
          <div className="mb-6 flex justify-center">
						<Image
						src="/avatar.svg"
						alt="Imagem de Maycon Vinicius"
						width={150}
						height={150}/>
          </div>

          <div className="mb-5 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0E7178]">Maycon Vinícius da Rosa</p>
            <h1 className="mt-2 text-2xl font-black tracking-[-0.06em] text-[#004369]/80">Links rápidos</h1>
          </div>

          <SocialLinktree
					githubIcon={faGithub}
					linkedinIcon={faLinkedin}
					instagramIcon={faInstagram}
					siteIcon={faLink}/>

          <Link
					href="/meu-setup"
					className="mt-2 block rounded-2xl border border-[#0E7178]/15 bg-[#F6F6F6] px-4 py-3.5 shadow-[0_18px_35px_rgba(14,113,120,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0E7178]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E7178]/10 text-[#0E7178]">
      						<FontAwesomeIcon icon={faLaptop} className="h-4"/>
                </span>

                <div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0E7178]/70">Workspace</div>
                  <span className="text-base font-semibold text-[#004369]">Meu Setup</span>
                </div>
              </div>

              <FontAwesomeIcon
							icon={faArrowUpRightFromSquare}
							className="h-4 text-[#0E7178]"/>
            </div>
          </Link>
        </div>

        <div className="mt-5 text-center text-xs text-[#004369]">
          <div className="mb-1 flex items-center justify-center gap-1 font-medium">
            <span>Desenvolvido com muito</span>
            <FontAwesomeIcon icon={faMugHot} className="h-3"/>
          </div>

          <span>
            por
            <Link
						className="ml-1 font-bold underline decoration-[#0E7178]/60 underline-offset-2 transition hover:text-[#0E7178]"
						target="_blank"
						href={"https://mayconviniciusdev.com/"}>
              maicoding
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}