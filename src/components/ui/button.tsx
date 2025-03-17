import { Link } from "react-scroll";

import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ButtonBlue = () => {
  return (
    <div className="bg-blue hover:bg-blue/80 p-2 rounded-lg cursor-pointer">
      <Link className="text-white" to="contact" smooth={true} duration={500}>ENTRE EM CONTATO</Link>
    </div>
  );
}

export const ButtonWhite: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
    type={type}
    className={`w-full font-bold text-blue bg-white hover:bg-white/80 py-4 rounded-lg text-center`}
    disabled={disabled}
    onClick={onClick}>
      {children}
    </button>
  );
};
