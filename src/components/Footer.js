import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ivo-valentin-mastrangelo-42270521b/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon"title="LinkedIN" />
              </a>
              <a href="https://github.com/IvoVM" target="_blank" rel="noreferrer">
                <img src={navIcon4} alt="Icon" title="GitHub"/>
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
