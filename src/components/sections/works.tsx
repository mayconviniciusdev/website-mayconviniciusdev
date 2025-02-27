import Link from "next/link";

import { SocialLinksBlue } from "../ui/socialLinks";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import smartechIMG from '../../../public/smartechImage.png';

export default function Works() {
  return (
    <section>
      <div className="flex justify-center items-center mx-6 my-16">
        <div>
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-x-2">
              <h2 className="font-bold text-2xl text-blue">PORTFÓLIO |</h2>
              <Link target="_blank" href={"https://github.com/mayconviniciusdev/"}>
                <p className="font-bold text-sm text-blue-cyan hover:text-blue-cyan/50">VER TODOS</p>
              </Link>
            </div>

            <SocialLinksBlue
            linkedinIcon={faLinkedin} 
            instagramIcon={faInstagram}/>
          </div>

          <div className="max-w-[1440px]">
            <div className="grid grid-cols-2 gap-5">
              <div className="hover:opacity-80">
                <Link target="_blank" href={"/smartechrs"}>
                  <Image
                    alt="Background"
                    src={smartechIMG}
                    quality={100}
                    style={{width: '100%', height: 'auto'}}
                    className="rounded-tl-3xl"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}  