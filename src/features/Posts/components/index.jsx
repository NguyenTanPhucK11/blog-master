import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Row } from 'react-bootstrap';

Post.propTypes = {};

function Post({ imgUrl, body, title }) {

  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center">
          <h2>{title}</h2>
          <Image
            style={{ padding: '16px 8px 32px 8px' }}
            src={imgUrl}
            height={400}
          />
          <h4>{body}</h4>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
