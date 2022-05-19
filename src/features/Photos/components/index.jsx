import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostIdContext } from '../../../App';
Photo.propTypes = {};

function Photo({ idImg, width, height }) {
  const initPhoto = useSelector((state) => state.photo);
  const { id, setId } = useContext(PostIdContext);
  const handleOnClickImg = (id) => {
    setId(id);
  };

  return (
    <NavLink to="/detail">
      <Image
        src={initPhoto[idImg].url}
        onClick={() => handleOnClickImg(idImg)}
        width={width}
        height={height}
      />
    </NavLink>
  );
}

export default Photo;
