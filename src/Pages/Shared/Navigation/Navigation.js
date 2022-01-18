import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { IoIosMenu } from "react-icons/io";

const handleMenu = () => {};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav flex justify-around bg-gray-900 text-white py-3 container mx-auto ">
      <div className="left">
        <h1>AutoZone</h1>
      </div>
      <div className="middle space-x-4 hidden md:block">
        <Link to="">Home</Link>
        <Link to="">Cars</Link>
        <Link to="">About Us</Link>
      </div>
      <div className="right space-x-4 hidden md:block">
        <Link to="">Login</Link>
        <Link to="">Sign Up</Link>
      </div>
      <div className="md:hidden">
        <h1 className="text-3xl font-bold">
          <IoIosMenu />
        </h1>
      </div>
    </div>
  );
};

export default Navigation;
