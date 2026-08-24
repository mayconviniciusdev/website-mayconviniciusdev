import { Element } from "react-scroll";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "../../css/verticalTimeline.css";
import { servicesList } from "../../data/servicesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  Componente: Services
  Arquivo: src/components/sections/services.tsx

  Resumo:
  - Exibe a seção de serviços oferecidos em formato de linha do tempo vertical.
  - Os dados são carregados dinamicamente a partir de `servicesList`.
  - Utiliza `FontAwesome` para exibição dos ícones.
*/

export default function Services() {
  return (
    <section className="px-5 my-25">
      {/* Elemento âncora para navegação suave */}
      <Element name="services">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">  
            <Image
            src="/initial/heading-services.svg"
            alt="Serviços"
            aria-hidden="true"
            quality={100}
            width={400}
            height={400}/>
          </div>
        </div>

        {/* Serviços */}
        <VerticalTimeline layout="1-column-left">
          {servicesList.map((event, index) => (
            // Elemento individual da timeline representando um serviço
            <VerticalTimelineElement
            key={index}
            icon={<FontAwesomeIcon icon={event.icon}/>} // Ícone do serviço
            iconStyle={{background: "#052B47", color: "#D6EDFF"}} // Estilização do ícone
            contentStyle={{background: "", color: "#333", boxShadow: "0 7px 7px rgba(5, 43, 71, 1.0)"}}> {/* Estilização do card */}
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Element>
    </section>
  )
}