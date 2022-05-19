import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Image } from 'react-bootstrap';
import './styles.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
Album.propTypes = {};

function Album({ id, title, photoOnClick }) {
  const initPhoto = useSelector((state) => state.photo);
  const [photo, setPhoto] = useState(initPhoto);

  const handleOnClickImg = (id) => {
    if (!photoOnClick) return;
    photoOnClick(id);
  };

  return (
    <Container className="album-vertical">
      <Col>
        <NavLink to="/detail">
          <Image
            src={photo[id].url}
            onClick={() => handleOnClickImg(id)}
            width={150}
            height={150}
          />
        </NavLink>
      </Col>
      <Col>{title}</Col>
    </Container>
  );
}

export default Album;
