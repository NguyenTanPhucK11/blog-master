import React from 'react';
import PropTypes from 'prop-types';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Logout, Login } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
LayoutPage.propTypes = {};

function LayoutPage({ user }) {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="home">BLOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="my-2"
              className="my-2 my-lg-0"
              style={{ maxHeight: '200px', float: 'left' }}
              navbarScroll
            >
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="pages">Pages</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user?.email ? (
              <>
                <Navbar.Text>
                  <a>{user?.email}</a>
                </Navbar.Text>
                <NavLink to="/home" style={{ marginLeft: '16px' }}>
                  <div onClick={logout}>{user?.email && <Logout></Logout>}</div>
                </NavLink>{' '}
              </>
            ) : (
              <NavLink to="/login">
                Log in<Login></Login>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LayoutPage;
