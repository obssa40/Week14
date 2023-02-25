
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import movies from "./MoviesArrayList";
import { addReview } from "./MoviesArrayList";
import { getReviews } from "./MoviesArrayList";

const ReviewForm = (props) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const newReview = {
      id: Math.floor(Math.random() * 1000),
      review: review,
    };
    let movieID = props.movies.movie.id;
    addReview(movieID, newReview);
    setReview("");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
        <FormGroup>
          <Label for="review">Review</Label>
          <Input
            type="text"
            name="review"
            id="review"
            placeholder="Enter a review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </FormGroup>

        <Button
         
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
