import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Whatsapp Web",
      description:
        " MEAN-Chatting App - coded using Angular 14,NodeJS(Express), Websockets and MongoDB",
      imgUrl: projImg4,
      link: "https://github.com/IvoVM/WhatsApp-Chatting-Front",
    },
    {
      title: "Twitch Streaming App",
      description:
        "A Twitch-like streaming app, coded using Angular 14, NodeJS(Express) and node-media-server",
      imgUrl: projImg5,
      link: "https://github.com/IvoVM/Twitch-Streaming-App-Front",
    },
    {
      title: "Ecommerce",
      description: "An Ecommerce app coded using Angular 14 and  NodeJS",
      imgUrl: projImg6,
      link: "https://github.com/IvoVM/Ecommerce",
    },
    {
      title: "Youtube",
      description: "An Youtube like app coded using React Mui Components  and YoutubeV3 Api from RapidApi",
      imgUrl: projImg7,
      link: "https://github.com/IvoVM/YoutubeCopy",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Every project can be found on mi GitHub.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  );
};
