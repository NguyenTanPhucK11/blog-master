import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CommentFeature from '../features/Comments';
import PostFeature from '../features/Posts';
import { auth } from '../firebase/firebase-config';
import './styles.scss';
DetailPage.propTypes = {};
function DetailPage() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    currentUser !== null && setUser(currentUser);
  });
  const logout = () => {};
  return (
    <div>
      <Row className="logout">
        <Col>
          <div> {user?.email}</div>
        </Col>
        <Col>
          <NavLink to="/home">
            <div onClick={logout}>logout</div>
          </NavLink>
        </Col>
      </Row>
      <PostFeature />
      <CommentFeature />
    </div>
  );
}

export default DetailPage;
