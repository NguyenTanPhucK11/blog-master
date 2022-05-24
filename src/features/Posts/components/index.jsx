import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Photo from '../../Photos/components';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-config';

import './styles.scss';

Post.propTypes = {};

function Post({ body, title }) {
  const { idPost } = useParams();
  const navigate = useNavigate();
  const initPhoto = useSelector((state) => state.photo);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email === undefined) navigate('/login');
    });
  }, []);
  const imgUrl = initPhoto[(idPost ?? 1) - 1].url;
  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center align-items-start">
          <Image src={imgUrl} width={800} height={400} />
          <Container className="post__body">
            <Row>
              <Col sm={12} className="align-self-start">
                <div className="post__title">{title}</div>
              </Col>
              <Col sm={12} className="align-self-start">
                <Row className="post__user">
                  <Col sm={1}>
                    <Image src={imgUrl} roundedCircle></Image>
                  </Col>
                  <Col className="justify-content-start">
                    <div>Meriam Smith Interior February 10, 2022</div>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} className="align-self-start">
                <p>{body}</p>
              </Col>
              <Col sm={12} className="align-self-start">
                <div className="post__subtitle">
                  Simplicity is the ultimate sophistication
                </div>
              </Col>
              <Col sm={12} className="align-self-start">
                <p>
                  Oh acceptance apartments up sympathize astonished delightful.
                  Waiting him new lasting towards. Continuing melancholy
                  especially so to. Me unpleasing impossible in attachment
                  announcing so astonished. What ask leaf may nor upon door.
                  Tended remain my do stairs. Oh smiling amiable am so visited
                  cordial in offices hearted.
                </p>
              </Col>
              <Col sm={12} className="align-self-start">
                <p>
                  Oh acceptance apartments up sympathize astonished delightful.
                  Waiting him new lasting towards. Continuing melancholy
                  especially so to. Me unpleasing impossible in attachment
                  announcing so astonished. What ask leaf may nor upon door.
                  Tended remain my do stairs. Oh smiling amiable am so visited
                  cordial in offices hearted. Oh acceptance apartments up
                  sympathize astonished delightful. Waiting him new lasting
                  towards. Continuing melancholy especially so to. Me unpleasing
                  impossible in attachment announcing so astonished. What ask
                  leaf may nor upon door. Tended remain my do stairs. Oh smiling
                  amiable am so visited cordial in offices hearted. Waiting him
                  new lasting towards. Continuing melancholy especially so to.
                  Me unpleasing impossible in attachment announcing so
                  astonished. What ask leaf may nor upon door. Tended remain my
                  do stairs. Quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </Col>
              <Col sm={12} className="align-self-start">
                <div className="post__subtitle">
                  Simplicity is the ultimate sophistication
                </div>
              </Col>
              <Col sm={12} className="align-self-start">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}
export default Post;
