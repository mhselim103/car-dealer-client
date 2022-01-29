import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-fortress-04751.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container text-center my-5">
      <h1>Testimonials</h1>
      <Row xs={1} md={3} className="g-4">
        {reviews?.map((review) => (
          <Review review={review}></Review>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
