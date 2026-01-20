import { useState } from "react";
import { Element, Link } from "react-scroll";
import { SocialLinksWhite } from "./socialLinks/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ButtonMenu } from "./ui/buttons";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "QUEM SOU?", to: "about" },
    { label: "MEUS SERVIÇOS", to: "services" },
    { label: "PORTFÓLIO", to: "works" },
  ];
  
  return (
    <Element name="menu">
      <section className="pt-8 text-[#F6F6F6]">
        <div className="flex items-center justify-between md:justify-center pb-4">
          <div className="flex items-center gap-4">
            <img src="/logoWhite.png" alt="Logo da Maicod" className="w-6 h-6"/>
            <SocialLinksWhite githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-xl cursor-pointer">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/>
          </button>
        </div>
            
        <nav className={`${isMenuOpen ? 'flex' : 'hidden' } font-semibold text-sm flex flex-col md:flex md:flex-row md:justify-center md:items-center`}>
          <ul className="text-right flex flex-col gap-4 md:flex-row">
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} smooth={true} duration={500} offset={-170} onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer transition-all duration-300 hover:border-[#F6F6F6]/50 hover:text-[#F6F6F6]/80 md:hover:scale-105">
                <p>{item.label}</p>
              </Link>
            ))}
          </ul>
          <ButtonMenu text="ENTRE EM CONTATO"/>
        </nav>
      </section>
    </Element>
  )
}