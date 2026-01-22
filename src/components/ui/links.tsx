import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; 
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialIcons {
  githubIcon?: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
  siteIcon?: IconProp;
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

export const SocialLinksWhite = ({githubIcon, linkedinIcon, instagramIcon}: SocialIcons) => {
  return (
    <div className="flex gap-4 text-[#F6F6F6]">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && <FontAwesomeIcon icon={githubIcon} className="text-xl hover:text-[#F6F6F6]/80"/>}
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={linkedinIcon} className="text-xl hover:text-[#F6F6F6]/80"/>
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={instagramIcon} className="text-xl hover:text-[#F6F6F6]/80"/>
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