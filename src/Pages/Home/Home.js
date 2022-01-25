import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Cars></Cars>
      <Footer></Footer>
    </div>
  );
};

export default Home;
