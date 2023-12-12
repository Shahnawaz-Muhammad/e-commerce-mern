import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth_token")
  );

  const handleLogout = () => {
localStorage.clear();
window.location.reload()
  }
  return (
    <div>
      <Navbar color="light" light>
        <Container className="d-flex">
          <NavbarBrand href="/">E-Commerce</NavbarBrand>
          <Nav className="ms-auto d-flex flex-row" navbar>
            <NavItem className="px-3">
              <Link active to="/" className="text-black decoration-none">
                <NavLink active>Dashboard</NavLink>
              </Link>
            </NavItem>
            <NavItem className={`${isLoggedIn ? "d-none" : "d-block"} px-3`}>
              <Link to="auth/register">
                <NavLink>Sign Up</NavLink>
              </Link>
            </NavItem>
            {isLoggedIn ? (
              <NavItem className="px-3">
                <Link to="auth/login">
                  <Button color="primary" onClick={handleLogout}>Logout</Button>
                </Link>
              </NavItem>
            ) : (
              <NavItem className="px-3">
                <Button color="secondary">Login</Button>
              </NavItem>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
