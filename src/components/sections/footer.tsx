import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import { SocialLinksBlue } from "../ui/socialLinks"

import { Link } from "react-scroll"

export default function Footer() {
  return (
    <div className="mx-auto my-16 text-sm text-center">
      <div className="mx-4 text-blue-cyan font-bold">
        <Link 
				className="flex items-center justify-center cursor-pointer text-xs" 
				to="menu" offset={-55} smooth={true} duration={500}>
					VOLTAR PARA CIMA
					<FontAwesomeIcon 
					icon={faArrowUp}
					className="w-4"/>
				</Link>

				<p className="mt-4">RIO GRANDE DO SUL.</p>
        <p>MAYCON VINÍCIUS, PROGRAMADOR FRONTEND.</p>
        <span className="text-blue-cyan">contato@mayconviniciusdev.com</span>

        <div className="mt-4">
					<SocialLinksBlue 
					githubIcon={faGithub}
					linkedinIcon={faLinkedin}
					instagramIcon={faInstagram}/>
				</div>
			</div>
    </div>
  )
}