import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
/*
  Componente: HeaderSocialLinks
  Arquivo: src/components/ui/links.tsx

  Resumo:
  - Exibe ícones de redes sociais no header.
  - Cada ícone funciona como um link externo para perfis sociais.
  - Utiliza `FontAwesome` para renderização dos ícones.
  - Links são abertos em uma nova aba (`target="_blank"`).
*/

// Interface que descreve as propriedades esperadas pelo componente
interface IconsProps {
  githubIcon: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
  siteIcon?: IconProp;
  emailIcon?: IconProp;
}

// Componente que renderiza os ícones de redes sociais no header
export const HeaderSocialLinks = ({githubIcon, linkedinIcon, instagramIcon}: IconsProps) => {
  return (
    <div className="flex gap-4 opacity-50">
      <Link
      target="_blank"
      href={"https://github.com/mayconviniciusdev"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={githubIcon}/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={linkedinIcon}/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={instagramIcon}/>
      </Link>
    </div>
  );
}

// Componente que renderiza os ícones de redes sociais no footer
export const FooterSocialLinks = ({githubIcon, linkedinIcon, instagramIcon, emailIcon}: IconsProps) => {
  return (
    <div className="flex gap-4 opacity-50">
      <Link
      target="_blank"
      href={"https://github.com/mayconviniciusdev"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={githubIcon}/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={linkedinIcon}/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon 
        className="text-xl hover:text-[#D9D9D9]/50"
        icon={instagramIcon}/>
      </Link>

      {emailIcon &&
        <Link
        target="_blank"
        href={"mailto:contato@mayconviniciusdev.com"}>
          <FontAwesomeIcon 
          className="text-xl hover:text-[#F6F6F6]/50"
          icon={emailIcon}/>
        </Link>
      }
    </div>
  );
}


export const SocialLinktree = ({githubIcon, linkedinIcon, instagramIcon, siteIcon}: IconsProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-[#F6F6F6]">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && (
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#004369] px-4 py-3.5 shadow-[0_18px_35px_rgba(0,67,105,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004369]/90">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><FontAwesomeIcon icon={githubIcon} className="h-4"/></span>
              <span>GitHub</span>
            </div>
            
            <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-4 text-white/80"/>
          </div>
        )}
      </Link>

      <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
        {siteIcon && (
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#004369] px-4 py-3.5 shadow-[0_18px_35px_rgba(0,67,105,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004369]/90">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><FontAwesomeIcon icon={siteIcon} className="h-4"/></span>
              <span>Website</span>
            </div>

            <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-4 text-white/80"/>
          </div>
        )}
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev"}>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#004369] px-4 py-3.5 shadow-[0_18px_35px_rgba(0,67,105,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004369]/90">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><FontAwesomeIcon icon={instagramIcon} className="h-4"/></span>
            <span>Instagram</span>
          </div>

          <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="h-4 text-white/80"/>
        </div>
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev"}>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#004369] px-4 py-3.5 shadow-[0_18px_35px_rgba(0,67,105,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004369]/90">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><FontAwesomeIcon icon={linkedinIcon} className="h-4"/></span>
            <span>Linkedin</span>
          </div>

          <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="h-4 text-white/80"/>
        </div>
      </Link>
    </div>
  );
}