import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatApp from "../../Assets/Projects/chatApp.png";
import interviewBot from "../../Assets/Projects/interviewBot.png";
import placementCell from "../../Assets/Projects/placementCell.png";
import resume from "../../Assets/Projects/resume_analyser.png";
import chatBox from "../../Assets/Projects/chatBox.png";
import image from "../../Assets/Projects/image-recommender.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="Personal Chat Room or real-time chat application with user authentication, online status, typing indicators, and instant message delivery with react.js, Socket.IO, JWT, and MongoDB."
              ghLink="https://github.com/rituldani/real-time-chat-app.git"
              demoLink="https://real-time-chat-app-git-main-ritul-danis-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interviewBot}
              isBlog={false}
              title="Interview Bot"
              description="The Interview Preparation Bot is an AI-powered web application designed to help users simulate real interview experiences. It generates relevant technical questions based on the Job Role, and also supports voice-based interaction using speech-to-text."
              ghLink="https://github.com/rituldani/interview-preparation-bot"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placementCell}
              isBlog={false}
              title="PLacement Cell Application"
              description="The Placement Cell Web Application is a web-based platform designed to streamline and manage college placement activities efficiently. It serves as a bridge between students and recruiters and facilitating smooth communication."
              ghLink="https://github.com/rituldani/PlacementCell"
              demoLink="https://rituldani.github.io/PlacementCell/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Analyser Tool"
              description="A smart full-stack application that parses resumes in PDF format, extracts key information, matches user skills to job roles, and provides feedback and matched job suggestions."
              ghLink="https://github.com/rituldani/resume_analyzer_tool"
              demoLink="https://resume-analyzer-tool.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBox}
              isBlog={false}
              title="Ai Bot"
              description="A versatile AI-powered chatbot that leverages Google’s Gemini API to understand and respond to user queries in natural language. It supports open-ended conversations."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Image Recommandation App"
              description="Developed an AI-powered e-commerce recommendation system that suggests visually similar products based on user-uploaded images. "
              ghLink="https://github.com/rituldani/image-based-product-recommender-"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
