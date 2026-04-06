import { Element } from 'react-scroll';
import { SecondaryButton } from '../ui/buttons';
import Image from 'next/image';

/*
  Componente: About
  Arquivo: src/components/sections/about.tsx

  Resumo:
  - Seção "Sobre mim" do site.
  - Apresenta informações pessoais, objetivo profissional e tecnologias utilizadas.
  - Utiliza `react-scroll` para navegação suave.
  - Renderiza tecnologias de forma dinâmica e organizada.
*/

// Lista de tecnologias organizadas em linhas para exibição.
const techStack = [
 [
    { src: "/initial/html5-brands.svg", alt: "HTML5" },
    { src: "/initial/css3-brands.svg", alt: "CSS3" },
  ],
  [
    { src: "/initial/js-brands.svg", alt: "JavaScript" },
    { src: "/initial/typescript.svg", alt: "TypeScript" },
    { src: "/initial/react-brands.svg", alt: "React" },
    { src: "/initial/tailwind-brands.svg", alt: "Tailwind CSS" },
  ],
  [
    { src: "/initial/node.svg", alt: "Node.js" },
    { src: "/initial/postgresql.svg", alt: "PostgreSQL" },
    { src: "/initial/php-brands.svg", alt: "PHP" },
  ],
  [
    { src: "/initial/git-brands.svg", alt: "Git" },
    { src: "/initial/github-brands.svg", alt: "GitHub" },
  ],
  [
    { src: "/initial/figma-brands.svg", alt: "Figma" },
  ],
];

export default function About() {
  return (
    <section> 
      {/* Elemento âncora para navegação suave */}
      <Element name="about">
         {/* Seção: Sobre Mim */}
        <div className="my-25 flex flex-col items-center">
          {/* Título */}
          <div className="relative mb-8">
            <h2 className="relative z-10 mx-6 font-bold text-3xl text-[#004369]">UM POUCO SOBRE MIM</h2>

            <Image
            src="/initial/heading-about.svg"
            alt="Sobre mim"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-165 h-auto"
            aria-hidden="true"
            quality={100}
            width={660}
            height={660}/>
          </div>
          
          {/* Conteúdo textual  */}
          <div className="max-w-178 text-center">
            <h1 className="text-[#0E7178] text-3xl font-semibold">Maycon Vinícius – Desenvolvedor Web</h1>
            <div className='text-[#191919] text-xl font-medium mt-4 my-5'>
              <p className='mb-5'>Me encontrei na programação quando percebi que algumas linhas de código podem transformar ideias em resultados reais, gerando resultados e soluções poderosas para empresas e projetos.</p>
              <p>Atualmente, venho aprimorando constantemente meus conhecimentos em desenvolvimento web e aplicações, com o objetivo de implementar tecnologias modernas e ajudar negócios a fortalecer sua presença digital. Meu foco é desenvolver sites funcionais, rápidos e bem estruturados, que transmitam profissionalismo e gerem oportunidades para quem os utiliza.</p>
            </div>
            
            <SecondaryButton text='Como posso ajudar seu projeto?'/>
          </div>
        </div>

        {/* Seção: Tecnologias */}
        <div className='my-25 flex flex-col items-center'>
          {/* Título */}
          <div className="relative mb-8 w-165 flex justify-center">
            <h2 className="relative z-10 mx-6 font-bold text-3xl text-[#004369]">EXPERIÊNCIA COM</h2>

            <Image
            src="/initial/heading-technology.svg"
            alt="Sobre mim"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-auto"
            aria-hidden="true"
            quality={100}
            width={520}
            height={520}/>
          </div>


          <div className="max-w-206.75 text-center">
            {/* Conteúdo textual */}
            <div className='text-[#191919] text-xl font-medium mt-4 my-5'>
              <p className='mb-5'>
                Além da minha stack principal de desenvolvimento, também utilizo tecnologias e ferramentas como 
                <strong className='font-bold text-[#0E7178]'> WordPress, Elementor, Sass e Bootstrap </strong>
                para atender diferentes tipos de projetos e necessidades de clientes.
              </p>
            </div>

            {/* Grid de tecnologias */}
            <div className="flex flex-col items-center">
              {techStack.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                  {row.map((tech, index) => (
                    <div key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 
                    bg-white/5 backdrop-blur-md border border-white/10
                    hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20">
                      <Image
                      src={tech.src}
                      alt={tech.alt}
                      quality={100}
                      width={80}
                      height={80}/>
                      <span className="mt-2 text-sm opacity-80">{tech.alt}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}