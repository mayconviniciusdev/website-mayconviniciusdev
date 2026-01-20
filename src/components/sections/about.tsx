import { Element } from 'react-scroll';
import { ButtonBlue } from '../ui/buttons';

export default function About() {
  return (
    <section className='px-4'>  
      <Element name="about" className='my-16'>
        <div className="items-center md:grid md:grid-cols-2">
          <div className="flex justify-center mb-14 md:justify-end md:mb-0 md:pr-20">
            <img src="/mayconPhoto.jpeg" alt="Foto de Maycon Vinicius da Rosa"
            className="rounded-bl-[100px] rounded-tr-[100px] shadow-[#004369] shadow-2xl w-60 md:w-85"/>
          </div>
          
          <div className="flex flex-col gap-y-4 text-center items-center justify-center md:max-w-120 md:text-start md:items-start">
            <h1 className="text-3xl text-[#004369] font-bold">Maycon Vinícius – Desenvolvedor Web</h1>
            <div className='text-[20px] text-[#0E7178] font-medium'>
              <p className='mb-2'>Me encontrei no mundo da programação quando percebi os resultados e conquistas que algumas linhas de códigos podem fazer.</p>
              <p>Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com objetivo de implementar tecnologias e ajudar empresas ou projetos independentes em sua jornada online.</p>
            </div>
            
            <ButtonBlue text='Como posso te ajudar?'/>
          </div>
        </div>
      </Element>
    </section>
  );
}