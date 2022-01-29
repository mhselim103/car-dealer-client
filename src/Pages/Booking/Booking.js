import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Booking = (props) => {
  const { car, user } = props;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://sleepy-fortress-04751.herokuapp.com/orders", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("Car Booked Successfully");
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
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
  );
};

export default Booking;
