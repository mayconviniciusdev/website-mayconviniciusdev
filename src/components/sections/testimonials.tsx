import { SwiperProps, SwiperSlide } from "swiper/react"
import SwiperSlider from "../ui/swiperSlider"
import testimonials from "@/data/testimonialsList"

export default function Testimonials() {
  const settings: SwiperProps = {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      0: { // Tablet
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: { // Desktop
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    pagination: {clickable: true},
    autoplay: true,
  }
  
	return (
		<section className="mx-6 my-16 bullets-bottom">
      <div className="max-w-[1440px] mx-auto no-bullets">
        <h2 className="font-bold text-2xl text-blue text-start">DEPOIMENTOS</h2>
        <SwiperSlider settings={settings}>
          {testimonials.map((testimonials, index) => (
            <SwiperSlide
            key={index} 
            className="bg-gradient-to-r from-blue-cyan to-blue rounded-3xl py-10 px-8 mt-5">
              <div className="flex flex-col items-center">
                <p className="text-white text-center text-base">{testimonials.quote}</p>
                
                <div className="flex items-center mt-5">
                  <img
                  alt="Robson"
                  src={testimonials.img}
                  width={50}
                  height={50}
                  className="rounded-full"/>
                  <p className="ml-4 text-white/80 text-base">{testimonials.name}</p>
                </div>
              </div>
          </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </section>
	)
}