import React from 'react';
import '../assets/JobListings.css';

const JobListings = () => {
  return (
    <div className="vacancies-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span className="breadcrumb-item">Главная</span>
        <span className="breadcrumb-separator">></span>
        <span className="breadcrumb-current">Вакансии</span>
      </div>

      {/* Main Content */}
      <div className="vacancies-content">
        <h1 className="vacancies-title">Вакансии</h1>
        
        <div className="vacancies-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="vacancy-card">
              <h3 className="vacancy-title">Должность</h3>
              
              <div className="vacancy-section">
                <h4 className="section-title">Требования</h4>
                <p className="section-text">
                  Текст про требования текст про требования текст про требования текст про требования текст про требования
                </p>
              </div>
              
              <div className="vacancy-section">
                <h4 className="section-title">Обязанности</h4>
                <p className="section-text">
                  Текст про обязанности текст про обязанности текст про обязанности текст про обязанности текст про обязанности
                </p>
              </div>
              
              <div className="vacancy-section">
                <h4 className="section-title">Условия</h4>
                <p className="section-text">
                  Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия
                </p>
              </div>
              
              <div className="vacancy-contact">
                <h4 className="contact-title">Звоните</h4>
                <div className="contact-phone">
                  <img
                    src='/images/ui/phone.png'
                    alt="Телефон"
                    className="phone-icon"
                  />
                  <span className="phone-number">+7 904 271 35 90</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
