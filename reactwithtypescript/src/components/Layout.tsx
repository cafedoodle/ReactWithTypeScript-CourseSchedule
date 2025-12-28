// src/components/Layout.tsx
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Course Scheduler
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Course Planning
            </Nav.Link>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
            <Nav.Link as={Link} to="/colleges">
              College List
            </Nav.Link>
            <Nav.Link as={Link} to="/departments">
              Department List
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Course List
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
      <footer className="text-center mt-4">© 2025 Course Scheduler</footer>
    </div>
  );
};

export default Layout;
