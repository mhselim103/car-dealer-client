import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { reviewtext, rating, model, name } = review;
  return (
    <Col>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>{reviewtext}</Card.Text>
          <Card.Text>Rating :{rating}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
