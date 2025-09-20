// src/components/OrdersPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/OrderHistory.css';

const OrderHistory = () => {
  const navigate = useNavigate();

  // Пример данных заказов
  const [orders, setOrders] = useState([
    {
      id: 355,
      name: 'Антон',
      phone: '+7 912 888 77 55',
      status: 'Подтвержден',
      time: '11:00',
      date: 'Сегодня',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбаса', quantity: 4 },
        { title: 'Молоко', quantity: 2 },
      ],
    },
    {
      id: 222,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Подтвержден',
      time: '11:00',
      date: 'Сегодня',
      location: 'Салехард',
      items: [
        { title: 'Сосиски', quantity: 3 },
        { title: 'Хлеб', quantity: 1 },
      ],
    },
    {
      id: 134,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Возврат',
      time: '11:00',
      date: 'Сегодня',
      location: 'Салехард',
      items: [
        { title: 'Колбаса', quantity: 2 },
      ],
    },
    {
      id: 855,
      name: 'Антон',
      phone: '+7 912 888 77 55',
      status: 'Не подтвердили',
      time: '14:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Молоко', quantity: 1 },
        { title: 'Хлеб', quantity: 2 },
      ],
    },
    {
      id: 543,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Доставляется',
      time: '14:00',
      date: '1 апреля',
      location: 'Салехард',
      items: [
        { title: 'Сосиски', quantity: 2 },
      ],
    },
    {
      id: 756,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Подтвержден',
      time: '14:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбаса', quantity: 4 },
      ],
    },
    {
      id: 321,
      name: 'Антон',
      phone: '+7 912 888 77 55',
      status: 'Собран',
      time: '18:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Снеки', quantity: 4 },
        { title: 'Комбайн', quantity: 4 },
      ],
    },
    {
      id: 421,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Новый',
      time: '18:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбасы', quantity: 4 },
        { title: 'Снеки', quantity: 4 },
      ],
    },
    {
      id: 661,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Новый',
      time: '20:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбасы', quantity: 4 },
        { title: 'Снеки', quantity: 4 },
      ],
    },
    {
      id: 232,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Новый',
      time: '20:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбасы', quantity: 4 },
        { title: 'Снеки', quantity: 4 },
      ],
    },
    {
      id: 512,
      name: 'Дмитрий',
      phone: '+7 912 888 77 55',
      status: 'Новый',
      time: '20:00',
      date: '1 апреля',
      location: 'Усть-Ижма',
      items: [
        { title: 'Колбасы', quantity: 4 },
        { title: 'Снеки', quantity: 4 },
      ],
    },
  ]);

  // Состояние для выбранного времени
  const [selectedTime, setSelectedTime] = useState('11:00');
  const [showCalendar, setShowCalendar] = useState(false);

  // Обработчики
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowCalendar(false);
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Заказы</h1>
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          На главную
        </button>
      </div>

      {/* Фильтры дат */}
      <div className="date-filters">
        <button className="date-btn active">Сегодня</button>
        <button className="date-btn">1 апреля</button>
        <button className="date-btn">5 апреля</button>
      </div>

      {/* Заказы по времени */}
      {['11:00', '14:00', '18:00', '20:00'].map((time) => (
        <div key={time} className="time-section">
          <div className="time-header">
            <span>{time}</span>
            <span>✓ {Math.floor(Math.random() * 10)}/{Math.floor(Math.random() * 10)}</span>
          </div>
          <div className="location-tags">
            {['Усть-Ижма', 'Cалехард'].map((loc) => (
              <span key={loc} className="location-tag">{loc}</span>
            ))}
          </div>
          <div className="orders-list">
            {orders
              .filter(order => order.time === time)
              .map((order) => (
                <div key={order.id} className="order-item">
                  <div className="order-info">
                    <div className="order-id">{order.id}</div>
                    <div className="customer-info">
                      <img src="https://via.placeholder.com/32" alt={order.name} />
                      <span>{order.name}</span>
                    </div>
                    <div className="phone">{order.phone}</div>
                  </div>
                  <div className="order-status">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        backgroundColor: '#f9f7f3',
                        color: '#333',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Новый">Новый</option>
                      <option value="Собран">Собран</option>
                      <option value="Доставляется">Доставляется</option>
                      <option value="Подтвержден">Подтвержден</option>
                      <option value="Не подтвердили">Не подтвердили</option>
                      <option value="Возврат">Возврат</option>
                      <option value="Вернули">Вернули</option>
                    </select>
                  </div>
                  <div className="order-actions">
                    <button className="view-order-btn">Просмотреть заказ</button>
                    <button className="chat-btn">💬</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;