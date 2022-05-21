import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
import {
  FacebookRounded,
  Twitter,
  Instagram,
  Apple,
} from '@mui/icons-material';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <Row>
        <Col>
          <Col className="footer__title">Services</Col>
          <Col>Web design</Col>
          <Col>Development</Col>
          <Col>Hosting</Col>
        </Col>
        <Col>
          <Col className="footer__title">About</Col>
          <Col>Company</Col>
          <Col>Team</Col>
          <Col>Legacy</Col>
        </Col>
        <Col>
          <Col className="footer__title">Careers</Col>
          <Col>Job openings</Col>
          <Col>Employee success</Col>
          <Col>Benefits</Col>
        </Col>
      </Row>
      <Col className="my-5">
        <Col className="d-flex justify-content-center ">
          <FacebookRounded className="mx-2" color="disabled"></FacebookRounded>
          <Twitter className="mx-2" color="disabled"></Twitter>
          <Instagram className="mx-2" color="disabled"></Instagram>
          <Apple className="mx-2" color="disabled"></Apple>
        </Col>
        <Col style={{ padding: '16px' }}>Company Name © 2022</Col>
      </Col>
    </div>
  );
}

export default Footer;
