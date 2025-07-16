import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiRender,
  SiBlender,
  // SiXampp,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VSCode" },
  { icon: <SiBlender />, name: "Blender" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
]

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tech, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <div>
            {tech.icon}
            <span className="tooltip-text">{tech.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
