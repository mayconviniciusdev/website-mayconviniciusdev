import { useState } from "react";

import { ButtonBlue } from "../ui/button";
import { SocialLinksBlue } from "../ui/socialLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="my-10 mx-6">
      <div className="flex justify-between md:justify-center items-center">
        <SocialLinksBlue
        githubIcon={faGithub}
        linkedinIcon={faLinkedin}
        instagramIcon={faInstagram}/>

        <div className="md:hidden">
          <button
            className="text-blue-cyan pl-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg"/>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-end font-semibold text-sm text-blue-cyan cursor-pointer mt-4">
            <ul className="text-right my-2">
              <li className="cursor-pointer">QUEM SOU?</li>
              <li className="cursor-pointer my-2">PORTFÓLIO</li>
              <li className="cursor-pointer">MEUS SERVIÇOS</li>
            </ul>
            <ButtonBlue/>
          </nav>
        )}
      
      {/* Menu Desktop */}
      <div className="hidden md:block">
        <nav className="mt-8 flex justify-center items-center gap-4 font-semibold text-sm text-blue-cyan ">
          <ul className="flex gap-4 ">
            <li className="cursor-pointer">QUEM SOU?</li>
            <li className="cursor-pointer">PORTFÓLIO</li>
            <li className="cursor-pointer">MEUS SERVIÇOS</li>
          </ul>
          <ButtonBlue/>
        </nav>
      </div>
    </header>
  )
}
