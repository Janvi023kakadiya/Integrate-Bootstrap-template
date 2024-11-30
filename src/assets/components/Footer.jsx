import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p>© {new Date().getFullYear()} Wine Shop. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
