import React from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const categories = [
    { name: 'Молоко, сыр, яйцо', image: '/images/ui/block_milk.png', key: 'молоко' },
    { name: 'Хлеб', image: '/images/ui/block_bread.png', key: 'хлеб' },
    { name: 'Фрукты и овощи', image: '/images/ui/block_fruit.png', key: 'фрукты' },
    { name: 'Замороженные продукты', image: '/images/ui/block_frozen.png', key: 'замороженные' },
    { name: 'Напитки', image: '/images/ui/block_drinks.png', key: 'напитки' },
    { name: 'Кондитерские изделия', image: '/images/ui/block_konditerskie.png', key: 'кондитерские' },
    { name: 'Чай, кофе', image: '/images/ui/block_tea.png', key: 'чай' },
    { name: 'Бакалея', image: '/images/ui/block_bakaleya.png', key: 'бакалея' },
    { name: 'Здоровое питание', image: '/images/ui/block_healthy.png', key: 'здоровое' },
    { name: 'Зоотовары', image: '/images/ui/block_zoo.png', key: 'зоотовары' },
    { name: 'Детское питание', image: '/images/ui/block_children.png', key: 'детское' },
    { name: 'Мясо, птица, колбаса', image: '/images/ui/block_meat.png', key: 'мясо' },
    { name: 'Непродовольственные товары', image: '/images/ui/block_tovars.png', key: 'непродовольственные' },
  ];

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
          Каталог
        </h2>
        <Link
          to="/"
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
        </Link>
      </div>

      {}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '20px' }}>
        {categories.map((cat) => (
          <Link
            to={`/category/${cat.key}`}
            key={cat.key}
            style={{
              position: 'relative',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url(${cat.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '120px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '12px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              textDecoration: 'none',
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;