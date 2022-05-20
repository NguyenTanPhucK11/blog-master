import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostIdContext } from '../../../App';
import { auth } from '../../../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
Photo.propTypes = {};

function Photo({ user, clickPhoto, idImg, width, height }) {
  const initPhoto = useSelector((state) => state.photo);
  const { id, setId } = useContext(PostIdContext);
  const navigate = useNavigate();
  const handleOnClickImg = (id) => {
    setId(id);
    console.log(user.email);
    if (!clickPhoto) return;
    // else if (user.email !== undefined) navigate('/detail');
    // else navigate('/login');
  };

  return (
    <Image
      src={initPhoto[idImg].url}
      onClick={() => handleOnClickImg(idImg)}
      width={width}
      height={height}
    />
  );
}

export default Photo;
