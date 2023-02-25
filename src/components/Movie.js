import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import Review from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";
import { getReviews } from "./MoviesArrayList";

const Movie = (props) => {
  const [rating, setRating] = useState(props.movie.rating);
  const [reviews, setReviews] = useState(props.movie.reviews || []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="col-md-6 mx-auto">
      <div className="card mb-12 shadow-sm">
        <img
          src={props.movie.poster_path}
          className="card-img-top"
          alt="movie poster"
        />
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <p className="card-text">{props.movie.release_date}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Stars rating={rating} onRatingChange={handleRatingChange} />
            <small className="text-muted">{rating}</small>
          </div>
        </div>
        <hr />
        <ReviewList movies={reviews} onReviewSubmit={handleReviewSubmit} />
        <hr />
        <ReviewForm movies={props} />
      </div>
    </div>
  );
};

export default Movie;
