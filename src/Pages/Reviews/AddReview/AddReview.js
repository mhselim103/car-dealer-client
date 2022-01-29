import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    axios
      .post("https://sleepy-fortress-04751.herokuapp.com/reviews", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("Review added");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h3 className="my-3 text-center text-primary">Add review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Your Name"
          value={user.displayName}
        />
        <input {...register("model")} placeholder="Car Model" />
        <input type="number" {...register("rating")} placeholder="Rating" />
        <textarea
          {...register("reviewtext")}
          placeholder="Your Review"
          className="form-control description"
        />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddReview;
