import { LinksBlue } from "../ui/links";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SwiperSlider from "../ui/swiperSlider";
import { SwiperSlide, SwiperProps } from "swiper/react";
import testimonials from "@/data/testimonialsList";

export default function Testimonials() {
  const settings: SwiperProps = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {clickable: true},
    autoplay: true,
  }
  
	return (
		<section className="px-4 my-16">
      <div className="max-w-270 mx-auto no-bullets">
        <h2 className="font-bold text-2xl text-[#004369] mb-2">DEPOIMENTOS DE CLIENTES</h2>
        <LinksBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
        
        <SwiperSlider settings={settings}>
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index} className="bg-linear-to-r from-[#0E7178] to-[#004369] rounded-2xl py-10">
              <div className="flex flex-col-reverse items-center justify-center px-10 md:flex-row md:px-20">
                <div className="flex flex-col-reverse md:flex-col md:pr-10 mt-5 md:mt-0">
                  <p className="text-[#F6F6F6] mt-2 max-w-180 md:mb-2 md:mt-0">{`❛ ${testimonials.quote} ❜`}</p>
                  <p className="text-[#F6F6F6]/50 text-sm">{testimonials.name}</p>
                </div>
                
                <img alt="Foto de Robson Santos" src={testimonials.img} className="rounded-full w-35 h-35 md:w-50 md:h-50"/>
              </div>
          </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </section>
	)
}