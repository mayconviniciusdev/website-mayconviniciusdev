import { Link } from "react-scroll";
import React from 'react';

/*
  Componente: HeaderNavButton
  Arquivo: src/components/ui/buttons.tsx

  Resumo:
  - Contém de botões reutilizáveis para o projeto.
  - Inclui botões de navegação com `react-scroll` e botão para formulários.
*/

// Interface que descreve as props esperadas pelo componente.
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  text?: string;
}

// Componente que renderiza um Link de navegação suave até o elemento com id "contact".
export const HeaderNavButton: React.FC<ButtonProps> = ({text}) => { 
  return (  
    <Link
    to="contact"
    smooth={true}
    duration={500}
    aria-label={text ?? "Ir para contato"}
    className="cursor-pointer font-bold transition-all duration-300 text-[#004369] hover:text-[#004369]/80 
    md:bg-[#D9D9D9] md:ml-4 md:px-6 md:py-2 md:hover:scale-105 md:rounded-lg"> 
      {text}
    </Link>
  ); 
}

export const ButtonWhite: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className="border-2 border-[#F6F6F6] hover:border-[#F6F6F6]/50 text-sm text-[#F6F6F6] hover:text-[#F6F6F6]/80 hover:scale-105 font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-300">
      <Link to="contact" smooth={true} duration={500}>{text}</Link>
    </div>
  );
}

export const ButtonBlue: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className="border-2 border-[#0E7178] hover:border-[#004369]/80 text-sm text-[#0E7178] hover:text-[#004369] hover:scale-105 font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-300">
      <Link to="contact" smooth={true} duration={500}>{text}</Link>
    </div>
  );
}

export const ButtonForm: React.FC<ButtonProps> = ({type = 'button', disabled = false, onClick, children}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}
    className={`w-full py-6 rounded-lg cursor-pointer font-bold text-center text-[#004369] bg-[#F6F6F6] hover:bg-[#F6F6F6]/80`}>
      {children}
    </button>
  );
};