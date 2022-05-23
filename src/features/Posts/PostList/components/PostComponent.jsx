import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Photo from '../../../Photos/components';
import { useNavigate } from 'react-router-dom';
import { PostIdContext } from '../../../../App';

import { ArrowRightAlt } from '@material-ui/icons';
import './styles.scss';
PostComponent.propTypes = {};

function PostComponent({ user, idImg, title }) {
  const imgUrl = 'https://via.placeholder.com/150/d32776';
  const { id, setId } = useContext(PostIdContext);
  const navigate = useNavigate();
  const handleOnClickImg = (e) => {
    e.preventDefault();
    setId(idImg);
    if (user?.email !== undefined) navigate('/detail');
    else navigate('/login');
  };
  return (
    <Container className="album-category">
      <Row className="d-flex justify-content-center align-items-center">
        {idImg % 2 != 0 && (
          <Col lg={6} sm={12} className="album-category__show" >
            <Photo user={user} clickPhoto={true} idImg={idImg} />
          </Col>
        )}
        <Col lg={6} sm={12}>
          <div className="album-category__title">{title}</div>
          <Row className="album-category__user">
            <Col xs={3}>
              <Image src={imgUrl} roundedCircle></Image>
            </Col>
            <Col className="justify-content-start">
              <div>Meriam Smith Interior February 10, 2022</div>
            </Col>
          </Row>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est
            minus iste in accusantium repellat repudiandae nulla blanditiis
            iusto dolores!
          </div>
          <div className="album-category__continue">
            <a href="" onClick={(e) => handleOnClickImg(e)}>
              Continue Reading<ArrowRightAlt></ArrowRightAlt>
            </a>
          </div>
        </Col>
        {idImg % 2 == 0 && (
          <Col lg={6} sm={12} className="album-category__show">
            <Photo user={user} clickPhoto={true} idImg={idImg} />
          </Col>
        )}
        <Col lg={6} sm={12} className="album-category__hide">
          <Photo user={user} clickPhoto={true} idImg={idImg} />
        </Col>
      </Row>
    </Container>
  );
}

export default PostComponent;
