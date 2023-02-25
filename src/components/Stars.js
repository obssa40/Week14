//create a component for Stars for movie rating using bootstrap
import React, {useState} from "react";

const Stars = (props) => {
  const [rating, setRating] = useState(props.rating || 0);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (index) => {
    setRating(index);
    props.onRatingChange(index);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRatingChange(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
