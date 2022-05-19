import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Image } from 'react-bootstrap';
import './styles.scss';

Album.propTypes = {};

function Album({ id, title, photoOnClick }) {
  const handleOnClickImg = (id) => {
    if (!photoOnClick) return;
    photoOnClick(id);
  };
  const photoUrl = 'https://via.placeholder.com/150/24f355';
  return (
    <Container className="album-vertical">
      <Col>
        <Image
          src={photoUrl}
          onClick={() => handleOnClickImg(id)}
          width={150}
          height={150}
        />
      </Col>
      <Col>{title}</Col>
    </Container>
  );
}

export default Album;
