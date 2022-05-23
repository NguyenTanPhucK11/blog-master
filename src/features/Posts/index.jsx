import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostIdContext } from '../../App';
import CommentFeature from '../Comments';
import Post from './components';
import { useParams } from 'react-router-dom';
import './styles.scss';

PostFeature.propTypes = {};

function PostFeature() {
  const initPostList = useSelector((state) => state.post);
  const { idPost } = useParams();

  const [postList, setPostList] = useState(initPostList);
  const limit = parseInt((idPost - 1) / 10 + 1);
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/users/' + limit + '/posts';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      const newPostList = [...postList, ...responseJSON];

      if (postList.find((post) => post.idPost == idPost) === undefined)
        setPostList(newPostList);
    }
    fetchPostList();
  }, [postList.find((post) => post.idPost == idPost) === undefined]);
  return (
    <div className="post-list">
      <Post {...postList.find((post) => post.id == idPost)} />
      <CommentFeature idPost={idPost} />
    </div>
  );
}

export default PostFeature;
