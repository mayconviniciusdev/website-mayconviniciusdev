import { Element } from "react-scroll";
import { LinksBlue } from "../ui/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { servicesLine } from "../../data/servicesLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <section className="px-4">
      <Element name="services">
        <div className="flex justify-center items-center my-16">
          <div>
            <div className="flex justify-between items-center mb-5 md:flex-col md:items-start md:gap-2">
              <h2 className="font-bold text-2xl text-[#004369]">MEUS SERVIÇOS</h2>
              <LinksBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
            </div>

            <VerticalTimeline className="custom-timeline">
              {servicesLine.map((event, index) => (
                <VerticalTimelineElement
                key={index}
                icon={<FontAwesomeIcon icon={event.icon}/>}
                iconStyle={{background: "#052B47", color: "#D6EDFF"}}
                contentStyle={{background: "", color: "#333", boxShadow: "0 7px 7px rgba(5,43,71,1.0)"}}
                contentArrowStyle={{borderRight: "7px solid #F9F9F9"}}>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </Element>
    </section>
  )
}