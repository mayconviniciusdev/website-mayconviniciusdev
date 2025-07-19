import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { servicesLine } from "../../data/servicesLine";
import "react-vertical-timeline-component/style.min.css";
import "../../css/reactTimeline.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { SocialLinksBlue } from "../socialLinks/links";
import { Element } from "react-scroll";

export default function Services() {
  return (
    <section>
      <Element name="services">
        <div className="flex justify-center items-center mx-6 my-16">
          <div>
            <div className="flex justify-between items-center mb-5 md:flex-col md:items-start md:gap-2">
              <h2 className="font-bold text-2xl text-blue">MEUS SERVIÇOS</h2>
              <SocialLinksBlue
              githubIcon={faGithub}
              linkedinIcon={faLinkedin}
              instagramIcon={faInstagram}/>
            </div>

            <VerticalTimeline className="custom-timeline">
              {servicesLine.map((event, index) => (
                <VerticalTimelineElement
                key={index}
                icon={<FontAwesomeIcon icon={event.icon}/>}
                iconStyle={{ background: "#052B47", color: "#D6EDFF" }}
                contentStyle={{ background: "", color: "#333", boxShadow: "0 7px 7px rgba(5,43,71,1.0)" }}
                contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}>
                  <h2 className="font-bold text-blue-cyan">{event.title}</h2>
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