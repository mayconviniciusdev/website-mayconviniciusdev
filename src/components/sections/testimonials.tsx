import Image from "next/image";
import SwiperSlider from "../ui/swiperSlider";
import { SwiperSlide, SwiperProps } from "swiper/react";
import testimonials from "@/data/testimonialsList";

/*
  Componente: Testimonials
  Arquivo: src/components/sections/testimonials.tsx

  Resumo:
  - Exibe a seção de depoimentos de clientes/usuários.
  - Utiliza um slider (Swiper) para navegação entre os depoimentos.
  - Os dados são carregados dinamicamente a partir de `testimonialsList`.
  - Cada depoimento contém imagem, texto e nome da pessoa.
*/

export default function Testimonials() {
   // Configurações do slider swiper
  const settings: SwiperProps = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {clickable: true},
    autoplay: true,
  }
  
	return (
		<section className="bg-[#2F4F4F]">
      <div className="px-5">
        <div className="flex flex-col items-center">
          {/* Título da seção */}
          <div className="relative mt-25">
            <Image
            src="/initial/heading-testimonials.svg"
            alt="Depoimentos"
            aria-hidden="true"
            quality={100}
            width={400}
            height={400}/>
          </div>
        </div>
        
        <div className="max-w-215 mx-auto no-bullets mt-8 pb-25">
          <SwiperSlider settings={settings}>
            {/* Mapeamento dos depoimentos */}
            {testimonials.map((testimonials, index) => (
              <SwiperSlide key={index} className="bg-[#D9D9D9] rounded-3xl py-10">
                <div className="flex flex-col-reverse items-center justify-center px-20 md:flex-row">
                  <div className="flex flex-col-reverse text-center text-[#2F4F4F] md:flex-col md:pr-10">
                    <p className="font-semibold mt-4 md:mt-2">{`❛${testimonials.quote} ❜`}</p>
                    <p className="mt-4 md:mt-2">{testimonials.name}</p>
                  </div>
                  
                  <Image
                  alt={`Foto de ${testimonials.name}`}
                  className="rounded-full"
                  src={testimonials.img}
                  width={180}
                  height={180}/>
                </div>
            </SwiperSlide>
            ))}
          </SwiperSlider>
        </div>
      </div>
    </section>
	)
}