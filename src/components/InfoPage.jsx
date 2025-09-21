import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoPage.css';

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-header">
        <h2>О компании</h2>
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          На главную
        </button>
      </div>

      <div className="text-and-image">
        <div className="text-content">
          <p className="highlight">
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.
          </p>
        </div>
        <div className="image-content">
          <img
            src={require('./team.png')}
            alt="Команда"
          />
          <div className="underline"></div>
        </div>
      </div>

      <div className="benefits">
        <div className="benefit">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p>Мы занимаемся розничной торговлей</p>
          <p>Более 20 лет.</p>
        </div>
        <div className="benefit">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p>Основная миссия компании</p>
          <p>Максимальное качество товаров и услуг по доступной цене.</p>
        </div>
        <div className="benefit">
          <div className="icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p>Отличительная черта нашей сети</p>
          <p>Здоровая и полезная продукция местного производства в наших магазинах.</p>
        </div>
      </div>

     <div className="logo-and-text">
        <div className="logo">
          <img
            src={require('./aboutCompanyLogo.png')}
            alt="Логотип"
          />
        </div>
        <div className="message">
          Спасибо за то, что вы с нами. Северяночка, везет всегда!
        </div>
      </div>
    </div>
  );
};


export default InfoPage;
