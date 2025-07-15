import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
  DiMysql,
} from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const techs = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
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

export default Techstack;
