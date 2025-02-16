import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcons } from "../types/socialLinks.types";
import Link from "next/link";

export const SocialLinksBlue = ({githubIcon, linkedinIcon, instagramIcon}: SocialIcons) => {
  return (
    <div className="flex justify-center gap-4 text-blue">
      <Link
      target="_blank" 
      href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && <FontAwesomeIcon icon={githubIcon} className="h-8 hover:text-blue/80"/>}
      </Link>

      <Link
      target="_blank"
      href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={linkedinIcon} className="h-8 hover:text-blue/80"/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={instagramIcon} className="h-8 hover:text-blue/80"/>
      </Link>
    </div>
    
  );
}

export const SocialLinksWhite = ({githubIcon, linkedinIcon, instagramIcon}: SocialIcons) => {
  return (
    <div className="flex justify-center gap-4 text-white">
      <Link
      target="_blank" 
      href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && <FontAwesomeIcon icon={githubIcon} className="h-8 hover:text-white/80"/>}
      </Link>

      <Link
      target="_blank"
      href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={linkedinIcon} className="h-8 hover:text-white/80"/>
      </Link>

      <Link
      target="_blank"
      href={"https://www.instagram.com/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={instagramIcon} className="h-8 hover:text-white/80"/>
      </Link>
    </div>
    
  );
}
