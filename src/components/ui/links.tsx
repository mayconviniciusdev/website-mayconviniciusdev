import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*
  Componente: HeaderSocialLinks
  Arquivo: src/components/ui/links.tsx

  Resumo:
  - Exibe ícones de redes sociais no header.
  - Cada ícone funciona como um link externo para perfis sociais.
  - Utiliza `FontAwesome` para renderização dos ícones.
  - Links são abertos em uma nova aba (`target="_blank"`).
*/

// Interface que descreve as propriedades esperadas pelo componente.
interface IconsProps {
  githubIcon: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
  siteIcon?: IconProp;
  email?: IconProp;
}

// Componente que renderiza os ícones de redes sociais no header.
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

export const LinksBlue = ({githubIcon, linkedinIcon, instagramIcon}: SocialIcons) => {
  return (
    <div className="mb-5 flex gap-4 text-[#0E7178]">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && <FontAwesomeIcon icon={githubIcon} className="text-2xl hover:text-[#0E7178]/60"/>}
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={linkedinIcon} className="text-2xl hover:text-[#0E7178]/60"/>
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={instagramIcon} className="text-2xl hover:text-[#0E7178]/60"/>
      </Link>
    </div>
  );
}

export const SocialLinktree = ({githubIcon, linkedinIcon, instagramIcon, siteIcon}: SocialIcons) => {
  return (
    <div className="text-[#F6F6F6] text-xs">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && ( 
        <div className="flex items-center justify-center hover:text-[#F6F6F6]/60 bg-[#004369] py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={githubIcon} className="h-6 mr-4"/>
          <span>GitHub</span>
        </div>)}
      </Link>
      
      <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
        {siteIcon && ( 
        <div className="flex items-center justify-center hover:text-[#F6F6F6]/60 bg-[#004369] py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={siteIcon} className="h-6 mr-4"/>
          <span>Website</span>
        </div>)}
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-[#F6F6F6]/60 bg-[#004369] py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={instagramIcon} className="h-6 mr-4"/>
          <span>Instagram</span>
        </div>
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-[#F6F6F6]/60 bg-[#004369] py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={linkedinIcon} className="h-6 mr-4"/>
          <span>Linkedin</span>
        </div>
      </Link>
    </div>
  );
}