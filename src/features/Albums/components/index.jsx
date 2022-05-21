import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Photo from '../../Photos/components';
import './styles.scss';
Album.propTypes = {};

function Album({ user, id, title }) {
  return (
    <Container className="album-vertical">
      <Col>
        <Photo
          user={user}
          clickPhoto={true}
          idImg={id}
          width={365}
          height={600}
        />
      </Col>
      <Col>{title}</Col>
    </Container>
  );
}

export default Album;
