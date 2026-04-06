import { Element } from 'react-scroll';
import Image from 'next/image';
import worksList from '@/data/worksList';
import Link from "next/link";

/*
  Componente: Works
  Arquivo: src/components/sections/works.tsx

  Resumo:
  - Exibe a seção de projetos do portfólio.
  - Utiliza `react-scroll` para permitir navegação suave até a seção "works".
  - Lista projetos dinamicamente a partir de `worksList`.
  - Cada projeto é exibido como um card com imagem, nome e tipo.
  - Os cards funcionam como links externos para os projetos.
*/

export default function Works() {
  return (
    <section className="bg-[#2F4F4F] px-5">
      {/* Elemento âncora para navegação suave */}
      <Element name="works">
        <div className=" flex flex-col items-center">
          {/* Título e descrição da seção */}
          <div className="relative mb-8 mt-25">
            <h2 className="relative z-10 mx-25 font-bold text-3xl text-[#D9D9D9]">PROJETOS</h2>
          
            <Image
            src="/initial/heading-portfolio.svg"
            alt="Portfolio"
            className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-129"
            aria-hidden="true"
            quality={100}
            width={516}
            height={516}/>
          </div>

          <p className="max-w-178 text-center text-[#D9D9D9] text-xl font-medium mt-4 my-10">
            Aqui você pode conferir alguns projetos desenvolvidos por mim, onde aplico soluções modernas de design e desenvolvimento para criar experiências digitais eficientes.
          </p>

          {/* Grid de projetos */}
          <div className="mb-25 grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1">
            {worksList.map((works, index) => (
              // Card clicável que redireciona para o projeto
              <Link
              key={index}
              target="_blank"
              href={works.href}
              className='transition-all duration-300 hover:-translate-y-2'>
                <Image
                alt="Trabalhos"
                width={450}
                height={75}
                src={works.img}
                className="rounded-t-3xl object-cover hover:opacity-80"/>

                <div className='pl-5 py-4 rounded-b-3xl bg-[#004369]/70'>
                  <p className='text-[#D9D9D9] text-[12px]'>{works.name}</p>
                  <h2 className='text-[#F6F6F6] font-bold'>{works.type}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}  