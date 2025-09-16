import React, { useState } from 'react';
import '../assets/DiscountCard.css';

const PromoCard = ({ 
  image, 
  discount, 
  price, 
  originalPrice, 
  title, 
  rating, 
  onAddToCart,
  onToggleFavorite,
  isFavorite = false 
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart();
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  //огика добавления в корзину
  const addToCart = () => {
  const product = {
    id: Date.now() + Math.random(),
    image,
    title,
    price: parseFloat(price.replace(',', '.')),
    discount: discount || null,
    quantity,
  };

  const savedCart = localStorage.getItem('cart');
  let cart = savedCart ? JSON.parse(savedCart) : [];

  const existingIndex = cart.findIndex(p => p.title === product.title);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  setIsAdded(true);

  // Отправляем событие обновления корзины
  window.dispatchEvent(new Event('cartUpdated'));
  
  if (window.updateCartCount) {
    window.updateCartCount();
  }
};

  return (
    <div className="promo-card">
      <div className="card-image-container">
        <img src={image} alt={title} />
        <div className="discount-badge">{discount}</div>
        
        <button 
          className="favorite-btn"
          onClick={() => {
            onToggleFavorite();
          }}
          aria-label="Добавить в избранное"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? '#ff6b35' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 18.33l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="card-info">
        <div className="prices">
          <span className="price-current">{price} ₽</span>
          <span className="price-original">{originalPrice} ₽</span>
        </div>

        <div className="product-title">{title}</div>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>

        <div className="add-to-cart-container">
          {isAdded ? (
            <div className="counter">
              <button onClick={handleDecrement}>−</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          ) : (
            <button 
              className="add-to-cart"
              onClick={handleAddToCart}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default PromoCard;
