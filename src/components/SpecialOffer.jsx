import React from 'react';
import '../assets/SpecialOffer.css';

const SpecialOffer = ({ image, alt }) => {
  return (
    <div className="special-offer">
      <img src={image} alt={alt} />
    </div>
  );
};

export default SpecialOffer;