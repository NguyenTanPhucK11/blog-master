import React, { useContext, useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, Route, Link, Router } from 'react-router-dom';
import { PostIdContext } from '../../../App';
import DetailPage from '../../../pages/detail';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-config';

import './styles.scss';
Photo.propTypes = {};

function Photo({ idImg, width, height }) {
  const initPhoto = useSelector((state) => state.photo);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);
  const handleOnClickImg = (id) => {
    if (user?.email !== undefined) navigate('/detail/' + id);
    else navigate('/login');
  };

  return (
    <Image
      className="img"
      src={initPhoto[idImg - 1].url}
      onClick={() => handleOnClickImg(idImg)}
      width={width}
      height={height}
    />
  );
}

export default Photo;
