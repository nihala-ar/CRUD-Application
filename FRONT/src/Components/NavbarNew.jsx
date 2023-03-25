import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarNew() {
  return (
    <div style={{ marginTop: "0", boxSizing: "border-box" }}>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }} to="/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }} to="/signup">
                Signup
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNew;
