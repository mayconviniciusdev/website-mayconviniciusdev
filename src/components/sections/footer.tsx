import { FooterSocialLinks } from "../ui/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

/*
  Componente: Footer
  Arquivo: src/components/sections/footer.tsx

  Resumo:
  - Exibe informações de localização e identificação do desenvolvedor.
  - Contém logo e links para redes sociais no rodapé.
*/

export default function Footer() {
  return (
    <div className="mx-auto py-8 text-center bg-[#2F4F4F]">
      <div className="px-4 text-[#F6F6F6]">
				<p>RIO GRANDE DO SUL, PASSO FUNDO.</p>
				<p className="font-semibold">MAYCON VINÍCIUS, DESENVOLVEDOR WEB.</p>

				<div className="flex justify-center items-end gap-4 mt-4">
					<Image
					src="/logo.svg"
					width={23}
					height={23}
					quality={100}
					alt="Logo da maicoding"/>
										
					{/* Componente que exibe os ícones das redes sociais. */}
					<FooterSocialLinks
					githubIcon={faGithub}
					linkedinIcon={faLinkedin} 
					instagramIcon={faInstagram}
					emailIcon={faEnvelope}/>
				</div>
			</div>
    </div>
  )
}