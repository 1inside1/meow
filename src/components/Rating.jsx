import React from 'react';
import '../assets/styles.css';

const Rating = ({ rating = 0 }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`rating-star ${i < rating ? 'text-yellow' : 'text-gray'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;