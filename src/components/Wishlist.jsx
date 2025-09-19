import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscountCard from './DiscountCard';
import ItemCard from './ItemCard';

const FavoritesPage = ({ favorites = [], toggleFavorite }) => {
  const navigate = useNavigate();

  //Состояние фильтров
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [inStock, setInStock] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  //Применение фильтров
  const applyFilters = () => {
    setAppliedFilters({
      priceFrom: parseFloat(priceFrom) || 0,
      priceTo: parseFloat(priceTo) || Infinity,
      inStock,
    });
  };

  //Очистка всех фильтров
  const clearAllFilters = () => {
    setPriceFrom('');
    setPriceTo('');
    setInStock(false);
    setAppliedFilters({});
  };

  // Очистка ценового фильтра
  const clearPriceFilter = () => {
    setPriceFrom('');
    setPriceTo('');
    setAppliedFilters(prev => ({ ...prev, priceFrom: 0, priceTo: Infinity }));
  };

  //Фильтрация товаров
  const filteredProducts = favorites.filter(product => {
    const price = parseFloat(product.price.replace(',', '.'));
    return (
      (!appliedFilters.priceFrom || price >= appliedFilters.priceFrom) &&
      (!appliedFilters.priceTo || price <= appliedFilters.priceTo) &&
      (appliedFilters.inStock ? true : true)
    );
  });

  return (
    <div style={{ width: '1440px', margin: '0 auto', padding: '0' }}>
      {}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px 20px',
        width: '100%',
      }}>
        <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>
          Избранное
        </h2>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            marginRight: '25px',
          }}
        >
          На главную
        </button>
      </div>

      {}
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 1, minWidth: '300px', background: '#f9f7f3', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>Фильтр</h3>

          {}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Цена</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                placeholder="от"
                style={{ width: '80px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              <span>—</span>
              <input
                type="number"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                placeholder="до"
                style={{ width: '80px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceFrom || 0}
              onChange={(e) => setPriceFrom(e.target.value)}
              style={{ width: '100%', height: '6px', background: '#eee', borderRadius: '3px' }}
            />
          </div>

          {}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
                style={{ width: '16px', height: '16px' }}
              />
              В наличии
            </label>
          </div>

          {}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={clearAllFilters}
              style={{
                padding: '8px 16px',
                backgroundColor: '#e8f5e8',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Очистить
            </button>
            <button
              onClick={applyFilters}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Применить
            </button>
          </div>
        </div>

        {}
        <div style={{ flex: 2, minWidth: '800px' }}>
          {}
          {appliedFilters.priceFrom > 0 && (
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              background: '#e8f5e8',
              padding: '8px 12px',
              borderRadius: '4px',
              marginBottom: '16px',
            }}>
              <span>Цена от {appliedFilters.priceFrom} до {appliedFilters.priceTo}</span>
              <button
                onClick={clearPriceFilter}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#333',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                ×
              </button>
            </div>
          )}

          {}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {filteredProducts.length === 0 ? (
              <p style={{ width: '100%', textAlign: 'center', color: '#999' }}>
                Избранное пусто
              </p>
            ) : (
              filteredProducts.map((product) => (
                <div key={product.id} style={{ width: '272px' }}>
                  {product.discount ? (
                    <DiscountCard
                      image={product.image}
                      discount={product.discount}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      title={product.title}
                      rating={product.rating}
                      onAddToCart={() => console.log('В корзину:', product.title)}
                      onToggleFavorite={() => toggleFavorite(product)}
                      isFavorite={true}
                    />
                  ) : (
                    <ItemCard
                      image={product.image}
                      price={product.price}
                      title={product.title}
                      rating={product.rating}
                      onAddToCart={() => console.log('В корзину:', product.title)}
                      onToggleFavorite={() => toggleFavorite(product)}
                      isFavorite={true}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;