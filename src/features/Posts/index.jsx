import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';
import './styles.scss';

PostFeature.propTypes = {};

function PostFeature({ id }) {
  const initPostList = useSelector((state) => state.post);
  const [postList, setPostList] = useState(initPostList);
  id = id == 0 ? 1 : id;
  const limit = parseInt((id - 1) / 10 + 1);

  useEffect(() => {
    async function fetchPostList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/users/' + limit + '/posts';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setPostList(responseJSON);
    }

    fetchPostList();
  }, [id]);

  const imgUrl = 'https://via.placeholder.com/600/92c952';

  return (
    <div className="post">
      <Post
        imgUrl={imgUrl}
        {...postList[parseInt(id - (limit - 1) * 10) - 1]}
      />
    </div>
  );
}

export default PostFeature;
