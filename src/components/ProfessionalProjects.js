import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

import projImg1 from "../assets/img/projectsImages/project-img1.png";
import projImg2 from "../assets/img/projectsImages/project-img2.png";
import projImg3 from "../assets/img/projectsImages/project-img3.png";
import projImg4 from "../assets/img/projectsImages/project-img4.png";
import projImg5 from "../assets/img/projectsImages/project-img5.png";
import projImg6 from "../assets/img/projectsImages/project-img8.png";
import projImg7 from "../assets/img/projectsImages/project-img7.png";

export const ProfessionalProjects = () => {
  const projects = [
    {
      title: "Lomi.cl",
      description:
        "An online ecommerce web app  from the lomi company, made in Angular and bootstrap",
      imgUrl: projImg6,
      link: "https://lomi.cl/",
    },
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
      description: "An online radio page, developed with React and bootstrap",
      imgUrl: projImg7,
      link: "https://fmmaster.com.ar/",
    },
  ];
  const doubledProjects = [...projects, ...projects];

  return (
    <section className="project" id="project">
      <Container>
        <h2 className="mb-5">Professional Projects</h2>
        <Carousel
          indicators={false} // Elimina los puntos indicadores
          interval={null} // Para deshabilitar el cambio automático
          wrap={true} // Para hacer el carrusel infinito
          prevIcon={<BsChevronLeft size={30} />}
          nextIcon={<BsChevronRight size={30} />}
        >
          {doubledProjects.map((project, index) => {
            // Muestra de a 2 proyectos a la vez
            if (index % 2 === 0) {
              return (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    <ProjectCard {...project}  />
                    {doubledProjects[index + 1] && (
                      <ProjectCard {...doubledProjects[index + 1]}/>
                    )}
                  </div>
                </Carousel.Item>
              );
            }
            return null;
          })}
        </Carousel>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
