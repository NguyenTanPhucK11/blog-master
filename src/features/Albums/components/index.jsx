import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Image } from 'react-bootstrap';
import './styles.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Photo from '../../Photos/components';
Album.propTypes = {};

function Album({ id, title }) {
  return (
    <Container className="album-vertical">
      <Col>
        <Photo idImg={id} width={150} height={150} />
      </Col>
      <Col>{title}</Col>
    </Container>
  );
}

export default Album;
