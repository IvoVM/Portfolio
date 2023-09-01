import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectsImages/project-img1.png";
import projImg2 from "../assets/img/projectsImages/project-img2.png";
import projImg3 from "../assets/img/projectsImages/project-img3.png";
import projImg4 from "../assets/img/projectsImages/project-img4.png";
import projImg5 from "../assets/img/projectsImages/project-img5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProfessionalProjects = () => {
  const projects = [
    {
      title: "Lomi-mobile-app",
      description:
        "An online store app for cell phones from the lomi company, made in ionic",
      imgUrl: projImg4,
      link: "https://github.com/IvoVM/lomi-store-mobile-app",
    },
    {
      title: "Lomi-dashboard",
      description:
        "A statistics page for investors, developed with Angular and ng-bootstrap",
      imgUrl: projImg5,
      link: "https://github.com/IvoVM/lomi-base-nx",
    },
    {
      title: "Storybook-components",
      description:
        "A series of 16 components that a company asked me for, developed in Angular",
      imgUrl: projImg3,
      link: "https://github.com/IvoVM/lomi-base-nx",
    },
    {
      title: "El semanario",
      description:
        "A Static news site, i work on his development and deploy with my brother",
      imgUrl: projImg1,
      link: "https://elsemanariomiramar.com.ar/",
    },
    {
      title: "FmMaster",
      description:
        "An online radio, I work on his players and do several debugs",
      imgUrl: projImg2,
      link: "https://fmmaster.com.ar/",
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
                  <h2>Professional Projects</h2>
                  <p>
                    The code of some projects is reserved for security reasons.
                  </p>
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
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
