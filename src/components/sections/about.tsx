import { Element } from 'react-scroll';

import SwiperSlider from "../ui/swiperSlider";
import { SwiperProps, SwiperSlide } from "swiper/react";

import { ButtonBlue } from "../ui/button";

export default function About() {
  const settings: SwiperProps = {
    slidesPerView: 1,
    pagination: {clickable: true},
    autoplay: true,
  }
  return (
    <section>
      <SwiperSlider settings={settings}>
        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
            <img
            src="/backgroundImage.png"
            alt="Banner"
            className="w-full h-full object-cover"/>
            
            <div 
            style={{position: 'absolute', width: '150px', height: '150px',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
              <img
              alt="Logo"
              src="/logoWhite.png"/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
              <img
              src="/backgroundImage.png"
              alt="Banner"
              className="w-full h-full object-cover"/>
              
              <div 
              style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <div className='text-white text-xl font-bold'>
                  <h2>Programação,</h2>
                  <h2>Desenvolvimento</h2>
                  <h2>e Tecnologia!</h2>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </SwiperSlider>
        
      <Element name="about" className='my-16'>
        <div className="items-center my-16 mx-6 md:grid grid-cols-2">
          <div className="flex justify-center mb-14 md:justify-end md:mb-0 md:pr-20 ">
            <img
            className="rounded-3xl shadow-blue-cyan shadow-2xl"
            src="/profilePicture.jpg"
            width="300"
            height="300"
            alt="Maycon Vinicius"/>
          </div>
          
          <div className="flex flex-col gap-y-2 text-center justify-center md:grid md:text-start md:max-w-lg">
            <p className="text-blue-cyan font-bold">Olá, meu nome é</p>
            <h2 className="text-2xl text-blue font-bold">Maycon Vinícius e sou <br/> Desenvolvedor Front-End</h2>
            <p className="text-lg text-blue-cyan font-medium">Me encontrei no mundo da programação quando percebi os resultados e conquistas que algumas linhas de códigos podem fazer. Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com objetivo de implementar tecnologias e ajudar empresas ou projetos independentes em sua jornada online. Também sou um entusiasta por tecnologia, ideias inovadoras e um ótimo café.</p>
            <div className="flex justify-center font-semibold text-sm md:justify-start"><ButtonBlue/></div>
          </div>
        </div>
      </Element>
    </section>
  );
}