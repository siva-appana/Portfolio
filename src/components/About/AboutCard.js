import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple">Siva Appana</span>,
            and I am from <span className="purple">Cumming, GA</span>.
            <br />I am a Junior at the <span className="purple">Georgia Institute of Technology </span>
            pursuing a BS in <span className="purple">Mechanical Engineering</span> with Minor 
            in <span className="purple">Computer Science - Intelligence</span>.
            <br />
            <br />
            Aside from my academic study/work, I enjoy...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Racquet Sports (e.g. Tennis and Badminton)
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing with Friends and Family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Finding unique solutions to help improve the overall condition of life."{" "}
          </p>
          <footer className="blockquote-footer">Siva Appana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
