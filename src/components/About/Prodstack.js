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
import { RiFileExcel2Line, RiFileWord2Line, } from 'react-icons/ri';
import { SiMicrosoftpowerpoint } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs'

function Prodstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Line />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileWord2Line />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsKanban />
      </Col>
    </Row>
  );
}

export default Prodstack;
