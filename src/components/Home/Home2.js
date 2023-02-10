import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a mechanical engineer with interests also in computer science and physics.
              <br />
              <br />I am distinguishes in using modeling tools such as
              <i>
                <b className="purple"> SolidWorks, Autodesk Inventor, and MATLAB. </b>
              </i>
              <br />
              <br />
              I am particularly interested in &nbsp;
              <i>
                <b className="purple">Automation, Mechanical Design, and Research </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning and Computational Dynamics.
                </b>
              </i>
              <br />
              <br />
              During my freetime, I enjoy exploring working 
                <i><b className="purple"> engineering principles</b></i> and learning 
              <i>
                <b className="purple">
                  {" "}
                  theory of algorithms.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">CONNECT</span> WITH ME ON...</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/siva-appana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sivaappana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.appana2003/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
