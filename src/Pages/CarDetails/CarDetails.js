import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const CarDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [car, setCar] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/orders", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("Tour Booked Successfully");
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
        {car ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-primary mt-2">Order Car</h3>
            <label htmlFor="fullName">Full Name</label>
            <input
              placeholder="Your Name"
              {...register("fullName")}
              defaultValue={user?.displayName}
            />

            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} value={user?.email} />
            <label htmlFor="title">Car Model</label>
            {car && car.model && (
              <input {...register("model")} value={car.model} />
            )}
            <label htmlFor="img">Image Url</label>
            {car && car.img && <input {...register("img")} value={car.img} />}
            <label htmlFor="carid">Car Id</label>
            {car && car._id && (
              <input type="text" {...register("carid")} value={car._id} />
            )}
            <label htmlFor="price">Price</label>
            {car && car.price && (
              <input type="text" {...register("price")} value={car.price} />
            )}
            <label htmlFor="address">Address</label>
            {car && (
              <input
                type="text"
                {...register("address")}
                placeholder="Type Your Address Here"
                required
              />
            )}
            <label htmlFor="phone">Phone Number</label>
            {car && (
              <input
                type="number"
                {...register("phone")}
                placeholder="Type Your Phone Number"
                required
              />
            )}
            <div style={{ color: "red" }}>
              {Object.keys(errors).length > 0 &&
                "There are errors, check your console."}
            </div>
            <button type="submit" className="register-btn">
              Buy Now
            </button>
          </form>
        ) : (
          "Loading......"
        )}
      </div>
    </div>
  );
};

export default CarDetails;
