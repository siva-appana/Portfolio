import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import freeflight from "../../Assets/Projects/freeflight.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          The following cards include projects I have recently completed or projects currently in progress. Note: THIS PAGE IS CURRENTLY UNDER CONSTRUCTION.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freeflight}
              isBlog={false}
              title="Rubber-band Powered Endurance Plane"
              description="For free flight competitions, I researched and constructed several self-designed rubber-band planes using balsa wood and 1.4 micron mylar covering. My highest flight time was 2.5 minutes of sustained flight, which won 2nd place in the 2021 TSA Flight Endurance competition among several medals earned in custom models constructed for Science Olympiad. The links below include a detailed documentation of my final flight and a video from my first free flight competition."
              ghLink="https://raw.githubusercontent.com/siva-appana/Portfolio/main/src/Assets/Projects/Flight_Documentation_Siva_Appana.pdf"
              demoLink="https://raw.githubusercontent.com/siva-appana/Portfolio/main/src/Assets/Projects/freeflight-video.mp4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
