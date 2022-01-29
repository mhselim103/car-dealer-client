import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  const { img, model, _id, price } = car;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} className="h-100" />
        <Card.Body className="text-center">
          <Card.Title className="text-primary">{model}</Card.Title>
          <p className="text-danger">Price :{price}</p>
        </Card.Body>
        <div>
          <Link to={`/cardetails/${_id}`}>
            <Button variant="primary">See Details</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Car;
