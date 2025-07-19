import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcons } from "./linksTypes";
import Link from "next/link";

export const SocialLinksBlue = ({githubIcon, linkedinIcon, instagramIcon}: SocialIcons) => {
  return (
    <div className="flex justify-center gap-4 text-blue">
      <Link
      className="flex items-center"
      target="_blank" 
      href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && <FontAwesomeIcon icon={githubIcon} className="h-8 hover:text-blue/80"/>}
      </Link>

      <Link
      className="flex items-center"
      target="_blank"
      href={"https://www.linkedin.com/in/mayconviniciusdev/"}>
        <FontAwesomeIcon icon={linkedinIcon} className="h-8 hover:text-blue/80"/>
      </Link>

      <Link
      className="flex items-center"
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

export const SocialLinktree = ({githubIcon, linkedinIcon, instagramIcon, siteIcon}: SocialIcons) => {
  return (
    <div className="text-white text-xs">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && ( 
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={githubIcon} className="h-6 mr-4"/>
          <span>GitHub</span>
        </div>)}
      </Link>
      
      <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
        {siteIcon && ( 
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={siteIcon} className="h-6 mr-4"/>
          <span>Website</span>
        </div>)}
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={instagramIcon} className="h-6 mr-4"/>
          <span>Instagram</span>
        </div>
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-8 my-4 rounded-xl">
          <FontAwesomeIcon icon={linkedinIcon} className="h-6 mr-4"/>
          <span>Linkedin</span>
        </div>
      </Link>
    </div>
  );
}