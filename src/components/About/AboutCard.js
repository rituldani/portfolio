import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritul Dani </span>
            from <span className="purple"> Chitturgarh, Rajasthan, India.</span>
            <br />
            I’m a final-year Computer Science student graduating in july 2025,
            <br/>with strong hands-on experience in MERN stack development. 
            <br/>I’ve built several full-stack projects that reflect my ability to create 
             real-world web applications using MongoDB, Express.js, React, and Node.js. 
            <br/>I’m now seeking opportunities to apply my skills in a professional environment
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
