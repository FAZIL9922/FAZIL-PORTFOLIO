import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGooglecolab,
  SiPycharm,
  SiPowerbi,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icon-name">Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
        <p className="tech-icon-name">Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <p className="tech-icon-name">Google Colab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icon-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p className="tech-icon-name">Power BI</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p className="tech-icon-name">Pycharm</p>
      </Col> */}
    </Row>
  );
}

export default Toolstack;