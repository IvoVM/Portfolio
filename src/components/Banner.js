import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mastrangelo", "Full Stack Developer"];
  const period = 2000;

  useEffect(
    () => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker);
      };
    }, // eslint-disable-next-line
    [text]
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(index - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ivo`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Mastrangelo", "Full Stack Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>English:</p>
                  <p>
                    I started in the world of web development due to the
                    influence of my older brother a Full Stack Professional.
                    Since then I have studied development using the latest
                    technologies with the goal in mind of building software
                    clean and efficient, I consider myself a proactive person,
                    educated and sociable who is always in constant learn.
                  </p>
                  <p>Español:</p>
                  <p>
                    Comenze en el mundo del desarrollo web debido a la
                    influencia de mi hermano mayor un Full Stack Profesional,
                    desde entonces he estudiado desarrollo usando las ultimas
                    tecnologias con el objetivo en mente de construir software
                    limpio y eficiente, me considero una persona proactiva,
                    educada y sociable que esta siempre en constante
                    aprendizaje.
                  </p>
                  <button>
                    <a
                      href="https://www.linkedin.com/in/ivo-valentin-mastrangelo-42270521b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Let's Work Together!
                      <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
