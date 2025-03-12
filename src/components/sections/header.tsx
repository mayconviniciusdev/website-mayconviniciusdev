import { useState } from "react";

import { ButtonBlue } from "../ui/button";
import { SocialLinksBlue } from "../ui/socialLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Element, Link } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Element name="menu">
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
            <nav className="md:hidden flex flex-col items-end font-semibold text-sm text-blue-cyan mt-4">
              <ul className="text-right my-2">
                <Link className="cursor-pointer" to="about" offset={-55} smooth={true} duration={500}><p>QUEM SOU?</p></Link>
                <Link className="cursor-pointer" to="services" offset={-55} smooth={true} duration={500}><p className="my-2">MEUS SERVIÇOS</p></Link>
                <Link className="cursor-pointer" to="works" offset={-55} smooth={true} duration={500}><p>PORTFÓLIO</p></Link>
              </ul>
              <ButtonBlue/>
            </nav>
          )}
      
        {/* Menu Desktop */}
        <div className="hidden md:block">
          <nav className="mt-8 flex justify-center items-center gap-4 font-semibold text-sm text-blue-cyan ">
            <ul className="flex gap-4 ">
              <Link className="cursor-pointer" to="about" offset={-55} smooth={true} duration={500}><p>QUEM SOU?</p></Link>
              <Link className="cursor-pointer" to="services" offset={-55} smooth={true} duration={500}><p>MEUS SERVIÇOS</p></Link>
              <Link className="cursor-pointer" to="works" offset={-55} smooth={true} duration={500}><p>PORTFÓLIO</p></Link>
            </ul>
            <ButtonBlue/>
          </nav>
        </div>
      </header>
    </Element>
  )
}
