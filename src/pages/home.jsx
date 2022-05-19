import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
import AlbumFeature from '../features/Albums';
import PostFeature from '../features/Posts';
import CommentFeature from '../features/Comments';

HomePage.propTypes = {};

function HomePage() {
  return (
    <div className="blog">
      <Row>
        <Col xs={8}>
          <AlbumFeature vertical={false} />
        </Col>
        <Col xs={4}>
          <AlbumFeature vertical={true} />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
