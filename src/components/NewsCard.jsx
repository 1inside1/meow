import React from 'react';
import '../assets/NewsCard.css';

const NewsCard = ({ 
  image, 
  date, 
  title, 
  description,
  onReadMore 
}) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} />
      <div className="article-content">
        <div className="article-date">{date}</div>
        <h3 className="article-title">{title}</h3>
        <p className="article-text">{description}</p>
        <button 
          className="read-more-btn"
          onClick={onReadMore}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default NewsCard;