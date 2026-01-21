import { Link } from "react-scroll";
import { LinksBlue } from "../ui/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="mx-auto mt-10 mb-5 text-center">
      <div className="px-4 text-[#004369]">
        <Link to="menu" offset={-55} smooth={true} duration={500}
				className="flex items-center justify-center cursor-pointer font-bold text-xs">
					VOLTAR PARA CIMA <FontAwesomeIcon icon={faArrowUp} className="w-4"/>
				</Link>

				<div className="font-semibold">
					<p className="mt-4">RIO GRANDE DO SUL.</p>
					<p>MAYCON VINÍCIUS, DESENVOLVEDOR WEB.</p>
					<span className="text-[#0E7178]">contato@mayconviniciusdev.com</span>
				</div>

        <div className="mt-4 flex justify-center">
					<LinksBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
				</div>
			</div>
    </div>
  )
}