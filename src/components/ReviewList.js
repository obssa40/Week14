//create a component which is a container inside of a Movie that houses Review components.

import React, { useEffect, useState } from "react";
import Review from "./Review";
import { getReviews } from "./MoviesArrayList";

const ReviewList = (props) => {
  return (
    <div className="container">
      <h4>Reviews</h4>
      <ul>
        {props.movies.map((review) => (
          <Review review={review} id={review.id} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
