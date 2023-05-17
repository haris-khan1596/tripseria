import React from "react";
import './CSS/review.css';

function Review({ picture, name, address, comment, rating }){
  // Helper function to generate an array of filled and unfilled stars
  const renderStars = (rating) => {
    const clampedRating = Math.max(1, Math.min(rating, 5));
    const filledStars = Array(clampedRating).fill("★");
    const unfilledStars = Array(5 - rating).fill("☆");
    return [...filledStars, ...unfilledStars];
  };

  return (
    <div className="review">
      <div className="review-header">
        <img className="review-picture" src={picture} alt="Reviewer" />
        <div className="review-info">
          <h4 className="review-name">{name}</h4>
          <p className="review-address">{address}</p>
        </div>
      </div>
      <p className="review-comment">{comment}</p>
      <div className="review-rating">
        {renderStars(rating).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default Review;
