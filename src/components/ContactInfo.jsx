import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/ContactInfo.css';

const ContactInfo = () => {
  const navigate = useNavigate();
  const [activeStore, setActiveStore] = useState('Щельяюр');

  const stores = [
    { name: 'Щельяюр', address: 'ул. Дорожная 10', phone: '+7 904 271 35 90', logo: '/images/ui/vosxod.png' },
    { name: 'Вертеп', address: 'ул. Советская 87', phone: '+7 82140 91330', logo: '/images/ui/parus.png' },
    { name: 'Краснобор', address: 'ул. Заводская 16', phone: '+7 82140 91101', logo: '/images/ui/ryab.png' },
    { name: 'Диюр', address: 'ул. Рабочая 1', phone: '+7 82140 91300', logo: '/images/ui/pelis.png' }
  ];

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1>Контакты</h1>
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          На главную
        </button>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M3 12L12 3L21 12V27H3V12Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 27V18H15V27" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-details">
            <h3>Бухгалтерия, склад</h3>
            <a href="tel:+78214092619" className="phone-link">+7 82140 92619</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#414141" strokeWidth="2"/>
              <circle cx="23" cy="23" r="6" stroke="#414141" strokeWidth="2"/>
              <path d="M20.09 9.91L9.91 20.09" stroke="#414141" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="contact-details">
            <h3>Вопросы по системе лояльности</h3>
            <a href="tel:+79087163397" className="phone-link">+7 908 716 33 97</a>
          </div>
        </div>
      </div>

      <div className="stores-section">
        <h2>Наши магазины</h2>
        
        <div className="store-tabs">
          {stores.map((store) => (
            <button
              key={store.name}
              className={`store-tab ${activeStore === store.name ? 'active' : ''}`}
              onClick={() => setActiveStore(store.name)}
            >
              {store.name}
            </button>
          ))}
        </div>

        <div className="store-list">
          {stores.map((store) => (
            <div key={store.name} className="store-item">
              <div className="store-logo">
                <img src={store.logo} alt={store.name} />
              </div>
              <div className="store-address">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M3 12L12 3L21 12V27H3V12Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 27V18H15V27" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{store.address}</span>
              </div>
              <div className="store-phone">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.04207 3.23945 9.11999 3.72C9.28562 4.68007 9.59445 5.61273 10.039 6.49C10.1648 6.7416 10.2242 7.01805 10.2124 7.29588C10.2006 7.57371 10.1179 7.84435 9.97199 8.08L8.91199 9.14C10.4414 11.7785 12.6414 13.9785 15.28 15.508L16.34 14.448C16.5757 14.3021 16.8463 14.2194 17.1241 14.2076C17.402 14.1958 17.6784 14.2552 17.93 14.381C18.8073 14.8255 19.7399 15.1344 20.7 15.3C21.1805 15.3779 21.6199 15.6192 21.9364 15.9862C22.2528 16.3531 22.4247 16.8246 22.42 17.31L22 16.92Z" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="phone-link">{store.phone}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="map-container">
          <img
            src='/images/ui/map1.png' 
            alt="Карта магазинов"
            className="map-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;