import React from "react";
import Header from "../Shared/Navigation/Header";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Cars></Cars>
    </div>
  );
};

export default Home;
