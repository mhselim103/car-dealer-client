import React from "react";
import Footer from "../Shared/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center  mb-4">Who We Are?</h1>
        <div className="row d-md-flex align-items-center">
          <div className="col-md-6 d-md-flex justify-content-end">
            <div>
              <img
                className="img-fluid"
                src="https://vantagefinance.com/wp-content/uploads/2019/04/used-car-dealer-financing-companies-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4">
              <h1 className="mb-5">AutoZone</h1>
              <p>
                AutoZone is a leading digital marketplace and solutions provider
                for the automotive industry that connects car shoppers with
                sellers. Launched in 1998 and headquartered in Chicago, the
                Company empowers shoppers with the data, resources and digital
                tools needed to make informed buying decisions and seamlessly
                connect with automotive retailers. In a rapidly changing market,
                Cars.com enables dealerships and OEMs with innovative technical
                solutions and data-driven intelligence to better reach and
                influence ready-to-buy shoppers, increase inventory turn and
                gain market share. In 2018, Cars.com acquired Dealer Inspire®,
                an innovative technology company building solutions that
                future-proof dealerships with more efficient operations, a
                faster and easier car buying process, and connected digital
                experiences that sell and service more vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
