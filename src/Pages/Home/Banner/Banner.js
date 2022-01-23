import React from "react";
import Slider from "react-slick";
import img1 from "../../../images/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import img2 from "../../../images/joshua-koblin-eqW1MPinEV4-unsplash.jpg";
import img3 from "../../../images/lance-asper-N9Pf2J656aQ-unsplash.jpg";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto text-center mt-4">
      <Slider {...settings}>
        <div>
          <img className="h-[80vh] w-full" src={img1} alt="" />
        </div>
        <div>
          <img className="h-[80vh] w-full" src={img2} alt="" />
        </div>
        <div>
          <img className="h-[80vh] w-full" src={img3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
