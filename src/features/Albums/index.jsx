import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Album from './components';
import './styles.scss';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const initAlbumList = useSelector((state) => state.album);
  const handlePhotoOnClick = (id) => {
    console.log(id);
  };
  return (
    <ul className="vertical">
      {initAlbumList.map((album) => (
        <Album
          key={'album-' + album.id}
          {...album}
          photoOnClick={handlePhotoOnClick}
        />
      ))}
    </ul>
  );
}

export default AlbumFeature;
