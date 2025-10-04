import React from 'react';
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div className="about-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span className="breadcrumb-item">Главная</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">О компании</span>
      </div>

      {/* Header Section - Full Width */}
      <div className="about-header-section">
        <div className="about-text-content">
          <h1 className="about-title">О компании</h1>
          
          <p className="about-description">
            Мы непрерывно развиваемся и<br />
            работаем над совершенствованием сервиса, заботимся о наших клиентах,<br />
            стремимся к лучшему будущему.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">

        <div className="benefits">
          <div className="benefit">
            <div className="benefit-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#FF6633" />
              </svg>
            </div>
            <div className="benefit-content">
              <p className="benefit-title">Мы занимаемся розничной торговлей</p>
              <p className="benefit-description">Более 20 лет.</p>
            </div>
          </div>
          
          <div className="benefit">
            <div className="benefit-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#FF6633" />
              </svg>
            </div>
            <div className="benefit-content">
              <p className="benefit-title">Основная миссия компании</p>
              <p className="benefit-description">Максимальное качество товаров и услуг по доступной цене.</p>
            </div>
          </div>
          
          <div className="benefit">
            <div className="benefit-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#FF6633" />
              </svg>
            </div>
            <div className="benefit-content">
              <p className="benefit-title">Отличительная черта нашей сети</p>
              <p className="benefit-description">Здоровая и полезная продукция местного производства в наших магазинах.</p>
            </div>
          </div>
        </div>

        <div className="logo-and-message">
          <div className="company-logo">
            <img
              src="/images/ui/logo.png"
              alt="Логотип Северяночка"
            />
          </div>
          <div className="message-box">
            <p className="message-text">
              Спасибо за то, что вы с нами. Северяночка, везет всегда!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InfoPage;
