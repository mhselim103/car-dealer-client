import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  const { img, model, _id } = car;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} className="h-100" />
        <Card.Body className="text-center">
          <Card.Title>{model}</Card.Title>
        </Card.Body>
        <div>
          <Link to={`/${_id}`}>
            <Button variant="primary">Book Now</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Car;
