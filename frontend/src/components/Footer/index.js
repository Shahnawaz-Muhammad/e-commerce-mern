import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container className="bg-light border position-fixed bottom-0 " fluid>
        <Row className="py-3">
          <Col>
            <p>Copyright © {new Date().getFullYear()} e-Commerce</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
