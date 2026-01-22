import { Element } from 'react-scroll';
import { LinksBlue } from "../ui/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Works() {
  return (
    <section className="px-4">
      <Element name="works">
        <div className="flex justify-center items-center my-16">
          <div className="max-w-270">
            <div className="flex justify-between items-center mb-5 md:flex-col md:items-start md:gap-2">
              <h2 className="font-bold text-2xl text-[#004369]">PORTFÓLIO</h2>
              <LinksBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
            </div>

            <div className="grid md:grid-cols-2">
              <Link target="_blank" href={"https://www.smartechrs.com.br"}>
                <img alt="" src="/smartechImage.png"
                className="h-75 rounded-tl-3xl object-cover hover:opacity-80"/>
              </Link>

              <Link target="_blank" href={"https://sindicatotapera.com"}>
                <img alt="" src="/sectaperaImage.png"
                className="h-75 rounded-br-3xl object-cover hover:opacity-80 md:rounded-tr-3xl md:rounded-br-none"/>
              </Link>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}  