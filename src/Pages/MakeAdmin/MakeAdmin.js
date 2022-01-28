import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (admin) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Admin Made Successfully");
        }
      });
  };

  return (
    <div className="bg-light register my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Make Admin</h3>

        <label htmlFor="email">Email</label>
        <input placeholder="Your Email" type="email" {...register("email")} />

        <div style={{ color: "red" }}>
          {Object.keys(errors).length > 0 &&
            "There are errors, check your console."}
        </div>
        <button className="register-btn">Make Admin</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
