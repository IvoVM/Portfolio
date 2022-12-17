import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
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
                <div className="skill-item">
                  <div className="percentage front">
                    <span className="percentage-number">8/10</span>
                  </div>
                  <h5>HTML5</h5>
                </div>
                <div className="skill-item">
                  <div className="percentage front">
                    <span className="percentage-number">7/10</span>
                  </div>
                  <h5>CSS/SCSS</h5>
                </div>
                <div className="skill-item">
                  <div className="percentage front">
                    <span className="percentage-number">7/10</span>
                  </div>
                  <h5>JavaScript</h5>
                </div>
                <div className="skill-item ">
                  <div className="percentage front">
                    <span className="percentage-number">4/10</span>
                  </div>
                  <h5>Bootstrap</h5>
                </div>
                <div className="skill-item">
                  <div className="percentage framework">
                    <span className="percentage-number">7/10</span>
                  </div>
                  <h5>Angular</h5>
                </div>
                <div className="skill-item">
                  <div className="percentage framework">
                    <span className="percentage-number">5/10</span>
                  </div>
                  <h5>React</h5>
                </div>
                <div className="item1">
                  <div className="percentage backend">
                    <span className="percentage-number">5/10</span>
                  </div>
                  <h5>NodeJs/Express</h5>
                </div>
                <div className="skill-item">
                  <div className="percentage database">
                    <span className="percentage-number">5/10</span>
                  </div>
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default NewSkills;
