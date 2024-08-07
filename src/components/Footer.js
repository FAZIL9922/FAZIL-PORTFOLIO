import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer-line m-2"><hr /></Row>
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Developed by Fazil Rahman</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3><strong className="green">Copyright © {year}</strong> Fazil</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
