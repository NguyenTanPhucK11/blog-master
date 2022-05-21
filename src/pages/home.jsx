import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AlbumFeature from '../features/Albums';
import './styles.scss';
HomePage.propTypes = {};

function HomePage({ user }) {
  return (
    <div className="blog">
      <Row className="d-flex justify-content-center">
        {/* <Col xs={12}>
          <AlbumFeature user={user} vertical={false} />
        </Col> */}
        <Col xs={12}>
          <AlbumFeature user={user} vertical={true} />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
