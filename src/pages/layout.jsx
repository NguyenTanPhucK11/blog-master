import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';
LayoutPage.propTypes = {};

function LayoutPage({ user }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">BLOG</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="my-2">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="pages">Pages</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="login">{user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LayoutPage;
