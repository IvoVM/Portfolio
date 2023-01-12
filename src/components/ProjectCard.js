import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} xs={12} sm={12} md={6} xl={6}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt= ''/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
