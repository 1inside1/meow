import React, { useState } from 'react';
import '../assets/LoginModal.css';

const AuthModal = ({ isOpen, onClose, onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('912');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  //Проверить сущ пользователей
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  const handleLogin = () => {
  const fullPhone = `+7${phone}`;
  const user = existingUsers.find(u => u.phone === fullPhone);
  if (user) {
    onLogin(user);  
    onClose();      
  } else {
    alert('Пользователь не найден. Зарегистрируйтесь сначала.');
  }
};

  const handleRegister = () => {
  if (!phone || !name) return;

  const fullPhone = `+7${phone}`;
  const newUser = { phone: fullPhone, name, photo };
  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  onRegister(newUser);
  onClose(); 
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Кнопка закрытия */}
        <button className="close-btn" onClick={onClose}>
          <div className="close-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Основной контент */}
        <div className="auth-content">
          <h2 className="auth-title">{isLogin ? 'Вход' : 'Регистрация'}</h2>
          
          {/* Поле телефона */}
          <div className="phone-field">
            <label className="phone-label">Телефон</label>
            <div className="phone-input-container">
              <span className="phone-prefix">+7</span>
              <input
                type="tel"
                className="phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="912"
                maxLength="10"
              />
            </div>
          </div>

          {/* Поля для регистрации */}
          {!isLogin && (
            <>
              <div className="name-field">
                <label className="name-label">Имя</label>
                <input
                  type="text"
                  className="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                />
              </div>

              <div className="photo-field">
                <label className="photo-label">Фото (необязательно)</label>
                <div className="photo-upload-container">
                  <input
                    type="file"
                    className="photo-input"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="photo-upload-label">
                    {photo ? (
                      <div className="photo-selected">
                        <span className="photo-icon">✅</span>
                        <span className="photo-text">Файл выбран</span>
                      </div>
                    ) : (
                      <div className="photo-placeholder">
                        <span className="photo-icon">📷</span>
                        <span className="photo-text">Выберите файл</span>
                      </div>
                    )}
                  </label>
                </div>
                {photo && (
                  <div className="photo-preview">
                    <img src={photo} alt="Preview" className="preview-image" />
                    <button 
                      type="button"
                      className="remove-photo-btn"
                      onClick={() => setPhoto(null)}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Кнопка входа/регистрации */}
          <button 
            className="login-btn" 
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? 'Вход' : 'Регистрация'}
          </button>

          {/* Нижние кнопки */}
          <div className="auth-buttons">
            <button 
              className="register-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Регистрация' : 'Вход'}
            </button>
            {isLogin && (
              <button 
                className="forgot-btn"
                onClick={() => alert('Функция "Забыли пароль?"')}
              >
                Забыли пароль?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;