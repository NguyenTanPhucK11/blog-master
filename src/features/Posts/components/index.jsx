import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Photo from '../../Photos/components';
import './styles.scss';

Post.propTypes = {};

function Post({ id, body, title }) {
  id = id ?? 1;
  const imgUrl = 'https://via.placeholder.com/150/d32776';

  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center">
          <Photo clickPhoto={false} idImg={id} width={800} height={400} />
          <h2 className="post__title">{title}</h2>
          <Row className="album-category__user d-flex justify-content-center">
            <Col xs={3} md={4} xl={5}>
              <Image src={imgUrl} roundedCircle></Image>
            </Col>
            <Col className="justify-content-start">
              <div>Meriam Smith Interior February 10, 2022</div>
            </Col>
          </Row>
          <h4>{body}</h4>
          {/* <h3>Make it simple, but significant.</h3> */}
        </Row>
      </Container>
    </div>
  );
}

export default Post;
