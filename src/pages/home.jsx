import React from 'react';
import AlbumFeature from '../features/Albums';
import { Col } from 'react-bootstrap';
import PostFeature from '../features/Posts';
import './styles.scss';

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="blog">
      <Col xs={8}>
        <PostFeature />
        <AlbumFeature />
      </Col>
    </div>
  );
}

export default HomePage;
