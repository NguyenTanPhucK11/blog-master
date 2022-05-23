import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Photo from '../../Photos/components';
import './styles.scss';
Album.propTypes = {};

function Album({ user, id, title }) {
  return (
    <Container className="album-vertical">
      <Col className="d-flex justify-content-center align-items-end">
        <Col className="album-vertical__title">
          <Col className="d-flex justify-content-center align-items-start">
            {title}
          </Col>
          <Col className="album-vertical__auth ">
            Meriam Smith - Fabuary 10 ,2022
          </Col>
        </Col>

        <Col>
          <Photo
            user={user}
            clickPhoto={true}
            idImg={id}
            width={365}
            height={600}
          />
        </Col>
      </Col>
    </Container>
  );
}

export default Album;
