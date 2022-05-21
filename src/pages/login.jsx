import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Person, Lock } from '@material-ui/icons';

LoginPage.propTypes = {};

function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    currentUser !== null && navigate('/detail');
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userId,
        userPassword
      );
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, userId, userPassword);
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <Col xs={2}>
        <Form>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <Person></Person>
              </InputGroup.Text>
              <Form.Control
                type="email"
                onChange={(e) => setUserId(e.target.value)}
              ></Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <Lock></Lock>
              </InputGroup.Text>
              <Form.Control
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
              ></Form.Control>
            </InputGroup>
          </Form.Group>
          {isLogin ? (
            <>
              <NavLink to={user.email !== undefined && '/detail'}></NavLink>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                Login
              </Button>
              <p
                style={{ textDecoration: 'underline' }}
                onClick={() => setIsLogin(false)}
              >
                I don't have account
              </p>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  register();
                }}
              >
                Create Account
              </Button>
              <p
                style={{ textDecoration: 'underline' }}
                onClick={() => setIsLogin(true)}
              >
                I already have account
              </p>
            </>
          )}
        </Form>
      </Col>
    </div>
  );
}

export default LoginPage;
