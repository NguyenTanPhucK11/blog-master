import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
import AlbumFeature from '../features/Albums';
import PostFeature from '../features/Posts';
import CommentFeature from '../features/Comments';
import { auth } from '../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
HomePage.propTypes = {};

function HomePage() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  return (
    <div className="blog">
      <Row>
        <Col xs={8}>
          <AlbumFeature user={user} vertical={false} />
        </Col>
        <Col xs={4}>
          <AlbumFeature user={user} vertical={true} />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
