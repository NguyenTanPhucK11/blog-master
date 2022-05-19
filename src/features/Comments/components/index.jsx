import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './styles.scss';

Comment.propTypes = {};

function Comment({ email, name, body }) {
  return (
    <Card className="card-comment">
      <Card.Header>{email}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Comment;
