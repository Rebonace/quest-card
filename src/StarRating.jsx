import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  return (
    <Rating
      onClick={handleRating}
      ratingValue={rating}
      fillColor="#A31621"
      emptyColor="#C2A878"
      size={30}
      /* Available Props */
    />
  );
}
