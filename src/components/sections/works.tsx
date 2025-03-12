import Link from "next/link";

import { SocialLinksBlue } from "../ui/socialLinks";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Element } from 'react-scroll';

export default function Works() {
  return (
    <section>
    <Element name="works">
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
              <div className="flex flex-col md:grid grid-cols-2 gap-5">
                <div className="hover:opacity-80">
                  <Link target="_blank" href={"/smartechrs"}>
                    <img
                      alt="Background"
                      src="/smartechImage.png"
                      className="rounded-tl-3xl object-cover h-[300px] lg:h-full"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}  