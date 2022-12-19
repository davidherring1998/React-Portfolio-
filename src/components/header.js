import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';


function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" sticky="top" >
      <Container>
        <Navbar.Brand href="#">David Herring</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  );
}

export default Header;
