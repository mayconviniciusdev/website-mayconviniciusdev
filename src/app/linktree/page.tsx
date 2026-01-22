import { Metadata } from "next";
export const metadata: Metadata = {title: { absolute: "Maycon | Linktree" }}

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMugHot } from "@fortawesome/free-solid-svg-icons";

import { SocialLinktree } from "../../components/ui/links";
import Link from "next/link";

export default function Page() {   
	return (	
		<div className="bg-linear-to-br from-[#0E7178] to-[#F6F6F6] flex flex-col justify-center items-center h-screen">
			<div className="pb-4 flex justify-center">
				<img src='/mayconPhoto.jpeg'alt="Imagem de Maycon Vinicius" width={350} style={{ maxWidth: '40%', height: 'auto'}} className="rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg shadow-[#004369] shadow-xl"/>
			</div>
			<SocialLinktree githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram} siteIcon={faLink}/>

			<div className="pt-2 text-[#004369] text-center text-xs">
				<div className="flex content-center">
					<span className="flex items-center">
						Desenvolvido com muito
					<FontAwesomeIcon
					className="h-3 ml-1 text-blue"
					icon={faMugHot}/>
					</span>
				</div>

				<span>
					por: 
					<Link 
					className="font-bold underline ml-1" 
					target="_blank" 
					href={"https://mayconviniciusdev.com/"}>
						Maycon Vinícius</Link>
				</span>
			</div>
		</div>
	)
}   