import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

function NavbarComponent({ cartCount }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">Wine Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#cart" className="d-flex align-items-center">
              Cart <Badge bg="light" text="dark" className="ms-1">{cartCount}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;      