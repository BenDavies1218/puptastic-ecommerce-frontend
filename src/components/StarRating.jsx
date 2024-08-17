import React from "react";
import "../styles/starRating.css"; // Add your styles for the star rating here

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`star ${index < Math.round(rating) ? "filled" : "empty"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.39 7.26L22 9.27l-5.89 4.29L17.21 21 12 17.77 6.79 21 7.89 13.56 2 9.27l7.61-1.01L12 2z" />
    </svg>
  ));

  return <div className="starRating">{stars}</div>;
};

export default StarRating;
