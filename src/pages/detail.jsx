import React from 'react';
import PostFeature from '../features/Posts';
import { useParams } from 'react-router-dom';
import './styles.scss';
DetailPage.propTypes = {};
function DetailPage() {
  return (
    <div>
      <PostFeature />
    </div>
  );
}

export default DetailPage;
