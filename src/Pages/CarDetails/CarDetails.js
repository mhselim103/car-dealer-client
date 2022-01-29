import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Booking from "../Booking/Booking";

const CarDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [car, setCar] = useState();
  useEffect(() => {
    fetch(`https://sleepy-fortress-04751.herokuapp.com/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, []);

  return (
    <div className="row booking container my-5">
      <div className="col-md-6">
        <h3 className="text-center text-primary mb-3">Car Details</h3>
        <img className="img-fluid" src={car?.img} alt="" />
        <h3 className="text-primary">
          <span className="text-success">Car Model </span> :{car?.model}
        </h3>
        <p>{car?.description}</p>
        <p className="text-danger">Price :{car?.price}</p>
      </div>
      <div className="col-md-6">
        <Booking car={car} user={user}></Booking>
      </div>
    </div>
  );
};

export default CarDetails;
