import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/JobListings.css';

const JobListings = () => {
  const navigate = useNavigate();

  return (
    <div className="vacancies-container">
      <div className="vacancies-header">
        <h2>Вакансии</h2>
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          На главную
        </button>
      </div>

      <div className="vacancies-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="vacancy-card">
            <h3>Должность</h3>
            <div className="subtitle">Требования</div>
            <div className="text">
              Текст про требования текст про требования текст про требования текст про требования текст про требования
            </div>
            <div className="subtitle">Обязанности</div>
            <div className="text">
              Текст про обязанности текст про обязанности текст про обязанности текст про обязанности текст про обязанности
            </div>
            <div className="subtitle">Условия</div>
            <div className="text">
              Текст про условия текст про условия текст про условия текст про условия текст про условия
            </div>
            <div className="subtitle">Звоните</div>
            <div className="phone">
              <img
                src='/images/ui/phone.png'
                alt="Телефон"
              />
              <span>+7 904 271 35 90</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default JobListings;
