import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import { Row } from "react-bootstrap";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-fortress-04751.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="my-5">Our Collections</h2>

        <Row xs={1} md={3} className="g-4">
          {cars?.map((car) => (
            <Car key={car.model} car={car}></Car>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cars;
