import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row xs="2" style={{height:'100vh'}}>
        <Col xs="2" className="bg-dark d-flex flex-column p-3">
          <NavLink to="/" className="list-item text-white text-decoration-none py-2">
            Products
          </NavLink>
          <NavLink to="/addProduct" className="list-item text-white text-decoration-none">
            Add Product
          </NavLink>
        </Col>
        <Col xs="10">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
