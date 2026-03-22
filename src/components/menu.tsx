import { useState } from "react";
import { Element, Link } from "react-scroll";
import { SocialLinksMenu } from "./ui/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ButtonMenu } from "./ui/buttons";
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
    // Element do react-scroll que permite rolar até este bloco.
    <Element name="menu">
      <section className="text-[#D9D9D9]/80 bg-[#2F4F4F]/80 h-30 flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex items-center gap-4 mb-2">
            <Image
            src="/logo.svg"
            width={23}
            height={23}
            quality={100}
            alt="Logo da maicoding"/>
            
            {/* Componente que exibe os ícones das redes sociais. */}
            <SocialLinksMenu
            githubIcon={faGithub} 
            linkedinIcon={faLinkedin} 
            instagramIcon={faInstagram}/>
          </div>

          {/* Botão toggle para abrir/fechar o menu em telas pequenas. */}
          <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xl cursor-pointer"
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
            <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars}/>
          </button>
        </div>
            
        {/* Navegação do menu */}
        <nav 
        id="main-navigation"
        role="navigation"
        aria-hidden={!isMenuOpen}
        className={`${isMenuOpen ? 'flex' : 'hidden'} font-semibold text-sm flex flex-col
        md:flex md:flex-row md:justify-center md:items-center`}>
          <ul className="text-right flex flex-col gap-4
          md:flex-row">
            {menuItems.map((item) => (
              <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-170}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer transition-all duration-300 hover:text-[#D9D9D9]/50
              md:hover:scale-105">
                <p>{item.label}</p>
              </Link>
            ))}
          </ul>

          {/* Botão de contato reutilizável */}
          <ButtonMenu text="ENTRE EM CONTATO"/>
        </nav>
      </section>
    </Element>
  )
}