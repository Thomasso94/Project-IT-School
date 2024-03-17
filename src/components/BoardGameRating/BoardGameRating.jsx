import React, { useState, useEffect } from "react";
import "./BoardGameRating.css";

function BoardGameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let stars = [];
    if (rating > 10 || rating < 1) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }

    return stars;
  };

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className="boardGameRating">
      {stars.map((stars, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

export default BoardGameRating;
