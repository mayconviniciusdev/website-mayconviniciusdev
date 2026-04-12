import { Link } from "react-scroll";
import React from 'react';

/*
  Componente: HeaderNavButton
  Arquivo: src/components/ui/buttons.tsx

  Resumo:
  - Contém de botões reutilizáveis para o projeto.
  - Inclui botões de navegação com `react-scroll` e botão para formulários.
*/

// Interface que descreve as props esperadas pelos componentes de botão
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  text?: string;
}

// Botão de navegação para a seção "contact" (usado no header)
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

// Botão principal que leva até a seção "works"
export const PrimaryButton: React.FC<ButtonProps> = ({text}) => {
  return (
    <Link
    to="works"
    smooth={true}
    className="cursor-pointer rounded-lg bg-[#2F4F4F] px-8 py-2 text-md text-[#D9D9D9] hover:scale-105 transition-all duration-300"
    duration={500}>
      {text}
    </Link>
  );
}

// Botão secundário que leva até a seção "contact"
export const SecondaryButton: React.FC<ButtonProps> = ({text}) => {
  return (
    <Link
    to="contact"
    smooth={true}
    className="cursor-pointer rounded-lg bg-[#D9D9D9] px-8 py-2 font-semibold text-md text-[#004369] hover:scale-105 transition-all duration-300"
    duration={500}>
      {text}
    </Link>
  );
}

// Botão utilizado no formulário
export const ButtonForm: React.FC<ButtonProps> = ({type = 'button', disabled = false, onClick, children}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}
    className="w-full cursor-pointer rounded-lg py-6 font-bold text-md text-center text-[#D9D9D9] bg-[#2F4F4F] hover:bg-[#2F4F4F]/80">
      {children}
    </button>
  );
};