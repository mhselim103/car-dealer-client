import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Footer from "../Shared/Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cars></Cars>
      <Footer></Footer>
    </div>
  );
};

export default Home;
