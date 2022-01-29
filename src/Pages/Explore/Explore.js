import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Car from "../Home/Car/Car";
import Footer from "../Shared/Footer/Footer";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-fortress-04751.herokuapp.com/explore")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <>
      <div className="container my-3 text-center">
        <h1 className="">Our All Models</h1>
        <Row xs={1} md={3} className="g-4 ">
          {cars?.map((car) => (
            <Car key={car.model} car={car}></Car>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
