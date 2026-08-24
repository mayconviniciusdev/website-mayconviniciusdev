import { useState } from "react";
import { Element, Link } from "react-scroll";
import { HeaderSocialLinks } from "./ui/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { HeaderNavButton } from "./ui/buttons";
import Image from "next/image";

/*
  Componente: Menu
  Arquivo: src/components/menu.tsx

  Resumo:
  - Exibe logo, ícones das redes sociais e navegação de menu.
  - Usa `react-scroll` para rolagem suave para seções nomeadas (ex.: "about").
  - Controle de exibição do menu em telas pequenas.
*/

export default function Menu() {
  // Estado que controla se o menu mobile está aberto ou fechado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Itens do menu, cada item possui um rótulo exibido e o destino da âncora.
  const menuItems = [
    { label: "QUEM SOU?", to: "about" },
    { label: "MEUS SERVIÇOS", to: "services" },
    { label: "PORTFÓLIO", to: "works" },
  ];
  
  return (
    <Element name="menu">
      <section className="text-[#D9D9D9]/80 backdrop-blur-md py-5 md:py-8">
        <div className="flex justify-center md:mb-5">
          <div className="flex items-center gap-4">
            <Image
            src="/logo.svg"
            width={23}
            height={23}
            quality={100}
            alt="Logo da maicoding"/>
            
            <HeaderSocialLinks
            githubIcon={faGithub} 
            linkedinIcon={faLinkedin} 
            instagramIcon={faInstagram}/>

            {/* Botão toggle para mobile */}
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl cursor-pointer"
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/>
            </button>
          </div>
        </div>
            
        {/* Navegação do menu */}
        <nav 
        id="main-navigation"
        role="navigation"
        aria-hidden={!isMenuOpen}
        className={`${isMenuOpen ? 'flex' : 'hidden'} 
        font-semibold text-sm p-6 w-full text-center items-center bg-[#2F4F4F]/90 backdrop-blur-sm rounded-b-2xl shadow-xl transition-all flex flex-row justify-center absolute top-full
        md:p-0 md:bg-transparent md:shadow-none md:static`}>
          <ul className="flex flex-col gap-4 w-full md:flex-row md:w-auto">
            {menuItems.map((item) => (
              <li key={item.to} className="w-full md:w-auto ">
                <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-170}
                onClick={() => setIsMenuOpen(false)}
                className="text-center cursor-pointer transition-all duration-300 hover:text-[#D9D9D9]/50">
                  {item.label}
                </Link>
              </li>
            ))}

            <div className="pb-1.5 md:pb-0">
              <HeaderNavButton text="ENTRE EM CONTATO"/>
            </div>
          </ul>
        </nav>
      </section>
    </Element>
  );
}