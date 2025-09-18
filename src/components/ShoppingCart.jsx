import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/ShoppingCart.css';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const formatPrice = (value) => new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  const getDiscountPercent = (discount) => {
    if (!discount) return 0;
    const m = String(discount).match(/-?(\d+)(?=%)/);
    return m ? Number(m[1]) : 0;
  };
  const getUnitPriceWithDiscount = (item) => {
    const percent = getDiscountPercent(item.discount);
    if (!percent) return item.price;
    return item.price * (1 - percent / 100);
  };

  //Читать корзину
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Ошибка чтения корзины', e);
      }
    }
  }, []);

  //Обновляь при изменении localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error('Ошибка чтения корзины', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  //Выделенные товары
  const [selectedItems, setSelectedItems] = useState(new Set());

  // Удаление выбранных
  const handleDeleteSelected = () => {
    const updatedCart = cartItems.filter(item => !selectedItems.has(item.id));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setSelectedItems(new Set());
    
    // Отправляем событие обновления корзины
    window.dispatchEvent(new Event('cartUpdated'));
    
    if (window.updateCartCount) window.updateCartCount();
  };

  //Выделить все
  const handleSelectAll = () => {
    const allIds = new Set(cartItems.map(item => item.id));
    setSelectedItems(allIds);
  };

  //Выделить/снять выделение
  const toggleItemSelection = (id) => {
    const newSet = new Set(selectedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedItems(newSet);
  };

  //Изменение количества
  const handleQuantityChange = (id, delta) => {
    setCartItems(prev => {
      const updated = prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      
      // Отправляем событие обновления корзины
      window.dispatchEvent(new Event('cartUpdated'));
      
      if (window.updateCartCount) {
        window.updateCartCount();
      }
      return updated;
    });
  };

  //Расчет итога и скидки
  const totals = cartItems.reduce(
    (acc, item) => {
      const unit = getUnitPriceWithDiscount(item);
      const row = unit * item.quantity;
      const rowWithoutDiscount = item.price * item.quantity;
      acc.items += item.quantity;
      acc.total += row;
      acc.discount += rowWithoutDiscount - row;
      return acc;
    },
    { items: 0, total: 0, discount: 0 }
  );

  const finalPrice = totals.total;
  const isMinOrderReached = finalPrice >= 1000;

  const [useBonus, setUseBonus] = useState(false);
  const availableBonus = 200;
  const appliedBonus = useBonus ? Math.min(availableBonus, finalPrice) : 0;

  // пример данных наличия: если в item.stock === 0, то нет в наличии
  const isOutOfStock = (item) => item.stock === 0;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Корзина{totals.items > 0 && (
          <span style={{
            marginLeft: 8,
            background: '#FF6633',
            color: '#fff',
            borderRadius: 4,
            padding: '6px 13px',
            fontSize: 16,
            verticalAlign: 'middle',
            fontWeight: 'normal'
          }}>{totals.items}</span>
        )}</h2>
      </div>

      {/* Фильтры */}
      <div className="filters">
        <button
          className="filter-btn select-all"
          onClick={handleSelectAll}
        >
          Выделить всё
        </button>
        <button
          className="filter-btn delete-selected"
          onClick={handleDeleteSelected}
        >
          Удалить выбранные
        </button>
      </div>

      <div style={{ display: 'flex', gap: '32px', margin: '20px 0' }}>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              Корзина пуста
            </div>
          ) : (
            cartItems.map((item) => {
              const unit = getUnitPriceWithDiscount(item);
              const out = isOutOfStock(item);
              return (
                <div key={item.id} className={`cart-item${out ? ' out-of-stock' : ''}`}>
                  <div className="cart-item-left">
                    <div className="product-image-wrapper">
                      <div className="product-image-container">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div 
                        className={`checkbox ${selectedItems.has(item.id) ? 'checked' : ''}`} 
                        onClick={() => toggleItemSelection(item.id)}
                      >
                        {selectedItems.has(item.id) && (
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                      {item.discount && (
                        <span className="discount-badge">{item.discount}</span>
                      )}
                    </div>
                    <div className="product-info">
                      <div className="product-title">
                        {item.title}
                        {out && (
                          <span style={{ marginLeft: 8, color: '#9e9e9e', fontWeight: 400 }}>Нет в наличии</span>
                        )}
                      </div>
                      <div className="price-per-unit">
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto', color: '#414141', fontSize: '12px' }}>
                          {formatPrice(unit)} ₽
                        </span>
                        <span style={{ color: '#606060', fontSize: '12px', marginLeft: '4px', fontFamily: 'Rubik' }}>
                          за шт.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <div className="counter">
                      <button disabled={out || item.quantity <= 1} onClick={() => !out && handleQuantityChange(item.id, -1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button disabled={out} onClick={() => !out && handleQuantityChange(item.id, 1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="total-price">
                      <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#414141', fontFamily: 'Rubik', textAlign: 'right' }}>
                        {formatPrice(unit * item.quantity)} ₽
                      </div>
                      {item.discount && (
                        <div style={{ fontSize: '16px', color: '#8F8F8F', textDecoration: 'line-through', fontFamily: 'Roboto', textAlign: 'right' }}>
                          {formatPrice(item.price * item.quantity)} ₽
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-summary">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <label className="switch">
              <input type="checkbox" checked={useBonus} onChange={(e) => setUseBonus(e.target.checked)} />
              <span className="slider" />
            </label>
            <span>Списать {formatPrice(availableBonus)} ₽</span>
          </div>
          <div style={{ color: '#999', fontSize: 12, marginBottom: 12 }}>На карте накоплено {formatPrice(availableBonus)} ₽</div>

          <div className="total">
            <span>Товаров</span>
            <span>{totals.items}</span>
          </div>
          <div className="total">
            <span>Сумма</span>
            <span className="total-price">{formatPrice(totals.total + totals.discount)} ₽</span>
          </div>
          <div className="total">
            <span>Скидка</span>
            <span style={{ color: '#ff6b35' }}>- {formatPrice(totals.discount)} ₽</span>
          </div>
          <div className="total">
            <span>Итого</span>
            <span className="total-price">{formatPrice(Math.max(0, totals.total - appliedBonus))} ₽</span>
          </div>
          {!isMinOrderReached && (
            <div className="min-order-warning">
              Минимальная сумма заказа 1000р.
            </div>
          )}
          <button
            className="checkout-btn"
            disabled={!isMinOrderReached}
            onClick={() => navigate('/delivery')}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};


export default ShoppingCart;
