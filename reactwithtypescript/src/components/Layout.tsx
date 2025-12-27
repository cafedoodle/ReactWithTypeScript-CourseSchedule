// src/components/Layout.tsx
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Course Scheduler</Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
      <footer className="text-center mt-4">© 2025 Course Scheduler</footer>
    </div>
  );
};

export default Layout;
