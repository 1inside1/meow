import React from 'react';
import DiscountCard from './DiscountCard';
import '../assets/SpecialOffers.css';
import { Link } from 'react-router-dom';


const Promotions = ({ onProductClick, toggleFavorite, isFavorite }) => {
  const products = [
    {
      id: 1,
      image: '/images/ui/pancakes.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Г/Ц Блинчики с мясом вес. Россия рррррррррррр',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 2,
      image: '/images/ui/milk1.webp',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
      rating: 4,
      category: 'Еда',
    },
    {
      id: 3,
      image: '/images/ui/colbasa.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскана...',
      rating: 5,
      category: 'Еда',
    },
    {
      id: 4,
      image: '/images/ui/sausages.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыром...',
      rating: 4,
      category: 'Еда',
    },
  ];

  return (
    <div className="promotions-section">
      <div className="section-header">
        <h2>Акции</h2>
        <Link to="/promotions" className="all-promotions">Все акции</Link>
      </div>
      <div className="promo-container">
        <div className="cards-container">
          {products.map((product) => (
            <DiscountCard
              key={product.id}
              {...product}
              onAddToCart={() => onProductClick?.(product)}
              onToggleFavorite={() => toggleFavorite(product)}
              isFavorite={isFavorite(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;