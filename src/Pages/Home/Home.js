import React from "react";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Footer from "../Shared/Footer/Footer";
import Reviews from "../Reviews/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cars></Cars>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
