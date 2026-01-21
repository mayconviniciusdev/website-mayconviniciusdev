import { Link } from "react-scroll";
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  text?: string;
}

export const ButtonMenu: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className="md:border-[#F6F6F6] md:border-2 md:ml-2 md:p-2 md:rounded-lg cursor-pointer font-bold transition-all duration-300 hover:border-[#F6F6F6]/50 hover:text-[#F6F6F6]/80 md:hover:scale-105 pt-4 text-right">
      <Link to="contact" smooth={true} duration={500}>{text}</Link>
    </div>
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