// src/components/DeliveryPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/ShippingInfo.css';

const ShippingInfo = () => {
  const navigate = useNavigate();

  // Получаем корзину из localStorage
  const savedCart = localStorage.getItem('cart');
  const cart = savedCart ? JSON.parse(savedCart) : [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const price = item.discount ? item.price * 0.9 : item.price;
    return sum + price * item.quantity;
  }, 0);

  // Состояния формы
  const [deliveryData, setDeliveryData] = useState({
    settlement: '',
    street: '',
    house: '',
    apartment: '',
    additional: '',
    date: '',
    timeSlot: '',
    phone: '',
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  // Обработчики изменений
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    setDeliveryData(prev => ({ ...prev, date: e.target.value }));
    setIsCalendarOpen(false);
  };

  const handleTimeSelect = (time) => {
    if (time === '18:00 - 20:00' || time === '20:00 - 22:00') {
      alert('На это время доставить не можем');
      return;
    }
    setSelectedTime(time);
    setDeliveryData(prev => ({ ...prev, timeSlot: time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заказ оформлен!');
    navigate('/');
  };

  return (
    <div className="delivery-container">
      {/* Заголовок и кнопка "На главную" */}
      <div className="delivery-header">
        <h2>Доставка</h2>
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          На главную
        </button>
      </div>

      <div className='main' >
        {/* Форма */}
      <div className="delivery-form">
        {/* Куда */}
        <div className="section">
          <h3>Куда</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Населенный пункт</label>
              <select
                name="settlement"
                value={deliveryData.settlement}
                onChange={handleChange}
                style={{ width: '200px', height: '40px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="">Выберите</option>
                <option value="Усть-Ижма">Усть-Ижма</option>
                <option value="Салехард">Салехард</option>
              </select>
            </div>
            <div className="form-group">
              <label>Улица</label>
              <input
                type="text"
                name="street"
                value={deliveryData.street}
                onChange={handleChange}
                placeholder=""
                style={{ width: '200px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label>Дом</label>
              <input
                type="text"
                name="house"
                value={deliveryData.house}
                onChange={handleChange}
                placeholder=""
                style={{ width: '80px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label>Квартира</label>
              <input
                type="text"
                name="apartment"
                value={deliveryData.apartment}
                onChange={handleChange}
                placeholder=""
                style={{ width: '80px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label>Дополнительно</label>
              <input
                type="text"
                name="additional"
                value={deliveryData.additional}
                onChange={handleChange}
                placeholder=""
                style={{ width: '150px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        {/* Когда */}
        <div className="section-when">
          <h3>Когда</h3>
          <div className="form-row">
            <div className="form-group">
              <label style= {{ flex: 1 }}>Дата</label>
              <input
                type="date"
                name="date"
                value={deliveryData.date}
                onChange={handleDateChange}
                style={{ width: '150px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label>Время</label>
              <div className="time-slots">
                {['8:00 - 14:00', '14:00 - 18:00', '18:00 - 20:00', '20:00 - 22:00'].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    disabled={time === '18:00 - 20:00' || time === '20:00 - 22:00'}
                    style={{
                      padding: '8px',
                      margin: '4px',
                      backgroundColor: selectedTime === time ? '#4caf50' : '#f9f7f3',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      opacity: time === '18:00 - 20:00' || time === '20:00 - 22:00' ? 0.6 : 1,
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Вход */}
        <div className="section">
          <h3>Вход</h3>
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={deliveryData.phone}
                onChange={handleChange}
                placeholder="+79"
                style={{ width: '200px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <button
              className="get-code-btn"
              style={{
                padding: '4px 16px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '16px',
              }}
            >
              Получить код
            </button>
            <a href="#" style={{ color: '#666', fontSize: '14px' }}>
              Войти по почте
            </a>
          </div>
        </div>
      </div>

      <div className='right'>
        {/* Плашка справа */}
      <div className="delivery-summary">
        <div className="summary-item">
          <span>Всего товаров</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-item">
          <span>Итоговая сумма</span>
          <span>{totalPrice.toFixed(2)} ₽</span>
        </div>
      </div>

      {/* Оплата */}
        <div className="section-btn">
          <div className="payment-options">
            <button
              className="payment-btn"
              style={{
                padding: '12px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '200px',
                marginRight: '16px',
              }}
            >
              Оплатить на сайте
            </button>
            <button
              className="payment-btn"
              style={{
                padding: '12px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '200px',
              }}
            >
              Оплатить при получении
            </button>
          </div>
        </div>
      </div>
      </div> 
    </div>
  );
};

export default ShippingInfo;