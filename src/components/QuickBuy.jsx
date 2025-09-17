import React from 'react';
import ItemCard from './ItemCard';
import '../assets/QuickBuy.css';
import { Link } from 'react-router-dom';

const BuyAgo = ({toggleFavorite, isFavorite}) => {
  const products = [
    {
      id: 8,
      image: '/images/ui/vetchina.png',
      price: '77,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 6,
      image: '/images/ui/sausages.png',
      price: '159,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 5,
      image: '/images/ui/colbasa1.png',
      price: '599,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 7,
      image: '/images/ui/milk1.webp',
      price: '49,39',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
  ];

  return (
    <div className="buyago-section">
      <div className="section-header">
        <h2>Покупали раньше</h2>
        <Link to="/buyago" className="all-buyago">Все покупки</Link>
      </div>

      {}
      <div className="buyago-container">
        <div className="cards-container">
          {products.map((product, index) => (
            <ItemCard
              key={index}
              image={product.image}
              price={product.price}
              title={product.title}
              rating={product.rating}
              onAddToCart={() => console.log('В корзину:', product.title)}
              onToggleFavorite={() => toggleFavorite(product)}
              isFavorite={isFavorite(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyAgo;