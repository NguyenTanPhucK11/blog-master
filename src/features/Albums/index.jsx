import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Album from './components';
import './styles.scss';
import { TabScrollButton } from '@mui/material';
import AlbumCategory from '../Posts/PostList/components/PostComponent';
import PostList from '../Posts/PostList/components/PostComponent';
import Slider from 'react-slick';
AlbumFeature.propTypes = {};

function AlbumFeature({ user, vertical }) {
  const initAlbumList = useSelector((state) => state.album);
  const [albumList, setAlbumList] = useState(initAlbumList);

  useEffect(() => {
    async function fetchAlbumList() {
      const request = 'https://jsonplaceholder.typicode.com/albums';
      const response = await fetch(request);
      const responseJSON = await response.json(response);

      setAlbumList(responseJSON);
    }
    fetchAlbumList();
  }, []);

  const albumCategory = albumList.filter((album) => album.id < 5);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="horizontal">
        <h2>CATEGORY </h2>
        <Slider {...settings}>
          {albumCategory.map((album) => (
            <Album user={user} key={'album-' + album.id} {...album} />
          ))}
        </Slider>
      </div>
    </>
  );
}

// function ChangeArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={className} style={{ ...style }} onClick={onClick} />;
// }

export default AlbumFeature;
