import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDassaultsystemes,
  SiAutodesk,
  SiArduino,
} from "react-icons/si";
import { Icon } from '@iconify/react';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDassaultsystemes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="material-symbols:precision-manufacturing" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:printer-3d" />
      </Col>
    </Row>
  );
}

export default Toolstack;
