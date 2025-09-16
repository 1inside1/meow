import React, { useState } from 'react';
import '../assets/LoginModal.css';

const AuthModal = ({ isOpen, onClose, onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  //Проверить сущ пользователей
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  const handleLogin = () => {
  const user = existingUsers.find(u => u.phone === phone);
  if (user) {
    onLogin(user);  
    onClose();      
  }
};

  const handleRegister = () => {
  if (!phone || !name) return;

  const newUser = { phone, name, photo };
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>

        <div className="form-group">
          <label>Телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7"
            style={{ width: '260px', height: '40px', padding: '8px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
          />
        </div>

        {!isLogin && (
          <>
            <div className="form-group">
              <label>Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                style={{ width: '260px', height: '40px', padding: '8px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>
            <div className="form-group">
              <label>Фото</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ width: '260px', height: '40px', padding: '8px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>
          </>
        )}

        <button
          className="submit-btn"
          onClick={isLogin ? handleLogin : handleRegister}
          style={{ width: '260px', height: '40px', padding: '12px', background: '#ff6b35', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 auto' }}
        >
          {isLogin ? 'Вход' : 'Регистрация'}
        </button>

        {isLogin && (
          <div className="bottom-links">
            <button
              className="reg-btn"
              onClick={() => setIsLogin(false)}
              style={{ width: 'auto', padding: '4px', background: 'transparent', border: '1px solid #ddd', color: '#333', cursor: 'pointer' }}
            >
              Регистрация
            </button>
            <button
              className="forgot-btn"
              onClick={() => alert('Функция "Забыли пароль?"')}
              style={{ width: 'auto', padding: '4px', background: 'transparent', border: '1px solid #ddd', color: '#333', cursor: 'pointer' }}
            >
              Забыли пароль?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;