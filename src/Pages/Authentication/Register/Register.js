import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser, authError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password, data.fullName, navigate);
  };

  return (
    <div className="bg-light register my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Create Your Account</h3>

        <label htmlFor="fullName">Full Name</label>
        <input placeholder="Your Name" {...register("fullName")} />

        <label htmlFor="email">Email</label>
        <input placeholder="Your Email" type="email" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Your Password"
          type="password"
          {...register("password")}
        />

        <div style={{ color: "red" }}>
          <p>{authError}</p>
          {Object.keys(errors).length > 0 &&
            "There are errors, check your console."}
        </div>
        <button className="register-btn">Sign Up</button>
        <Link to="/login">
          <small className="d-block text-end">Already Registered?</small>
        </Link>
      </form>
    </div>
  );
};

export default Register;
