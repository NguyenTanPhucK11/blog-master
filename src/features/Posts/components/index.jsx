import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Row } from 'react-bootstrap';
import Photo from '../../Photos/components';

Post.propTypes = {};

function Post({ id, body, title }) {
  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center">
          <h2>{title}</h2>
          <Photo idImg={id} width={800} height={400} />
          <h4>{body}</h4>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
