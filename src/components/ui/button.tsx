import { Link } from "react-scroll";

export const ButtonBlue = () => {
  return (
    <div className="bg-blue hover:bg-blue/80 p-2 rounded-lg cursor-pointer">
      <Link className="text-white" to="contact" smooth={true} duration={500}>ENTRE EM CONTATO</Link>
    </div>
  );
}

export const ButtonWhite = () => {
  return (
    <div className="bg-white hover:bg-white/80 py-4 rounded-lg text-center">
      <button className="text-blue font-bold ">ENTRE EM CONTATO</button>
    </div>
  );
}
