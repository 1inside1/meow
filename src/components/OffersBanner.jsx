import React from 'react';
import SpecialOffer from './SpecialOffer';
import '../assets/OffersBanner.css';

const OffersBanner = () => {
  const offer1 = '/images/ui/banner.png';
  const offer2 = '/images/ui/banner1.png';

  return (
    <section className="special-offers-section">
      <h2>Специальные предложения</h2>
      <div className="offers-container">
        <SpecialOffer image={offer1} alt="Оформите карту Северяночка" />
        <SpecialOffer image={offer2} alt="Покупайте акционные товары" />
      </div>
    </section>
  );
};

export default OffersBanner;