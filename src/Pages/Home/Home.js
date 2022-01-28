import React from "react";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Footer from "../Shared/Footer/Footer";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cars></Cars>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
