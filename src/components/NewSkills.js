import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Skill from "./Skill";
const NewSkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Skills = [
    {
      title: "HTML5",
      points: "8/10",
      className: "percentage front",
    },
    {
      title: "CSS/SCSS",
      points: "8/10",
      className: "percentage front",
    },
    {
      title: "Javascript",
      points: "7/10",
      className: "percentage front",
    },
    {
      title: "Bootstrap",
      points: "6/10",
      className: "percentage front",
    },
    {
      title: "Angular",
      points: "7/10",
      className: "percentage framework",
    },
    {
      title: "React",
      points: "7/10",
      className: "percentage framework",
    },
    {
      title: "NodeJs/Express",
      points: "7/10",
      className: "percentage backend",
    },
    {
      title: "MondoDB",
      points: "6/10",
      className: "percentage database",
    },
    {
      title: "PostgreSQL",
      points: "5/10",
      className: "percentage database",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="skill-description">
                The list of technologies that I use for my projects.
              </p>
              <p>
                <span className="frontend">Frontend</span> |{" "}
                <span className="framework-p">Frameworks</span> |{" "}
                <span className="backend-p">Backend</span> |{" "}
                <span className="database-p">Databases</span>{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {Skills.map((skill, index) => {
                  return <Skill key={index} {...skill} />;
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default NewSkills;
