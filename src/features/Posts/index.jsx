import React from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';
import './styles.scss';

PostFeature.propTypes = {};

function PostFeature(props) {
  const initPostList = useSelector((state) => state.post);

  console.log(initPostList);
  const imgUrl = 'https://via.placeholder.com/600/92c952';

  return (
    <div className="post">
      <Post imgUrl={imgUrl} {...initPostList[1]} />
    </div>
  );
}

export default PostFeature;
