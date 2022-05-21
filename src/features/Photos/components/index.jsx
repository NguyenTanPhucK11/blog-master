import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PostIdContext } from '../../../App';
Photo.propTypes = {};

function Photo({ user, clickPhoto, idImg, width, height }) {
  const initPhoto = useSelector((state) => state.photo);
  const { id, setId } = useContext(PostIdContext);
  const navigate = useNavigate();
  const handleOnClickImg = (id) => {
    setId(id);
    if (!clickPhoto) return;
    else if (user?.email !== undefined) navigate('/detail');
    else navigate('/login');
  };

  return (
    <Image
      src={initPhoto[idImg - 1].url}
      onClick={() => handleOnClickImg(idImg)}
      width={width}
      height={height}
    />
  );
}

export default Photo;
