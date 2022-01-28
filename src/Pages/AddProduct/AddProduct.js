import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    axios
      .post("http://localhost:5000/cars", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("New Car Added");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h3 className="my-3 text-center text-primary">Add New Car</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("img")} placeholder="Image Url" />
        <input {...register("model")} placeholder="Car Model" />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="form-control description"
        />

        <input {...register("price")} placeholder="Car Price" />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddProduct;
