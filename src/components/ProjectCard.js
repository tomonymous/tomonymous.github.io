import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={16} sm={8} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
