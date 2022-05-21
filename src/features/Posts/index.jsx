import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useDispatch, useSelector } from 'react-redux';
import { addPostList } from '../../reducers/postSlice';
import { PostIdContext } from '../../App';
import './styles.scss';

PostFeature.propTypes = {};

function PostFeature() {
  const initPostList = useSelector((state) => state.post);
  const { id, setId } = useContext(PostIdContext);
  const [postList, setPostList] = useState(initPostList);
  const limit = parseInt((id - 1) / 10 + 1);
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/users/' + limit + '/posts';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      const newPostList = [...postList, ...responseJSON];

      if (postList.find((post) => post.id == id) === undefined)
        setPostList(newPostList);
    }
    fetchPostList();
  }, [postList.find((post) => post.id == id) === undefined]);

  return (
    <div className="post">
      <Post {...postList.find((post) => post.id === id)} />
    </div>
  );
}

export default PostFeature;
