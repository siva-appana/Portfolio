import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaAws } from 'react-icons/fa';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="file-icons:matlab" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    </Row>
  );
}

export default Techstack;
