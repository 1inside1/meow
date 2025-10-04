// Общий бэкап проекта - все компоненты готовы
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialOffers from './components/SpecialOffers';
import NewsFeed from './components/NewsFeed';
import QuickBuy from './components/QuickBuy';
import OffersBanner from './components/OffersBanner';
import StoreLocations from './components/StoreLocations';
import NewsSection from './components/NewsSection';
import ItemCard from './components/ItemCard';
import DiscountCard from './components/DiscountCard';
import Wishlist from './components/Wishlist';
import ProductCatalog from './components/ProductCatalog';
import ProductCategory from './components/ProductCategory';
import InfoPage from './components/InfoPage';
import JobListings from './components/JobListings';
import ContactInfo from './components/ContactInfo';
import ShoppingCart from './components/ShoppingCart';
import ShippingInfo from './components/ShippingInfo';
import OrderHistory from './components/OrderHistory';
import Footer from './components/Footer';
import './assets/styles.css';

// Страница все статьи
const AllArticlesPage = () => {
  const navigate = useNavigate();

  const articles = [
    {
      image: '/images/ui/article.png',
      date: '05.03.2021',
      title: 'Режим использования масок и перчаток',
      description: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый день.',
    },
    {
      image: '/images/ui/article1.png',
      date: '05.03.2021',
      title: 'Весеннее настроение для каждой',
      description: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
    },
    {
      image: '/images/ui/article2.png',
      date: '22.02.2020',
      title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне?',
      description: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!',
    },
  ];

  return (
    <div style={{ width: '1440px', margin: '0 auto', padding: '0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px 20px',
        width: '100%',
      }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
          Все статьи
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

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ width: '376px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '162px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>{article.date}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{article.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{article.description}</p>
              <button
                style={{
                  width: '150px',
                  height: '40px',
                  backgroundColor: '#e8f5e8',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
                onClick={() => alert('Читать статью')}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
        {articles.map((article, index) => (
          <div key={`copy-${index}`} style={{ width: '376px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '162px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>{article.date}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{article.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{article.description}</p>
              <button
                style={{
                  width: '150px',
                  height: '40px',
                  backgroundColor: '#e8f5e8',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
                onClick={() => alert('Читать статью')}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//Страница все акции
const AllPromotionsPage = () => {
  const navigate = useNavigate();

  const promotions = [
    {
      image: '/images/ui/pancakes.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Г/Ц Блинчики с мясом вес. Россия рррррррррррр',
      rating: 2,
    },
    {
      image: '/images/ui/milk1.webp',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
      rating: 4,
    },
    {
      image: '/images/ui/colbasa.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскана...',
      rating: 5,
    },
    {
      image: '/images/ui/sausages.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыром...',
      rating: 4,
    },
  ];

  return (
    <div style={{ width: '1440px', margin: '0 auto', padding: '0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px 20px',
        width: '100%',
      }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          Все акции
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

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {promotions.map((promo, index) => (
          <div key={index} style={{ width: '272px' }}>
            <DiscountCard
              image={promo.image}
              discount={promo.discount}
              price={promo.price}
              originalPrice={promo.originalPrice}
              title={promo.title}
              rating={promo.rating}
              onAddToCart={() => console.log('В корзину:', promo.title)}
              onToggleFavorite={() => console.log('В избранное:', promo.title)}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
        {promotions.map((promo, index) => (
          <div key={`copy-${index}`} style={{ width: '272px' }}>
            <DiscountCard
              image={promo.image}
              discount={promo.discount}
              price={promo.price}
              originalPrice={promo.originalPrice}
              title={promo.title}
              rating={promo.rating}
              onAddToCart={() => console.log('В корзину:', promo.title)}
              onToggleFavorite={() => console.log('В избранное:', promo.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

//Страница все новинки
const AllNewsPage = () => {
  const navigate = useNavigate();

  const news = [
    {
      id: 5,
      image: '/images/ui/colbasa1.png',
      price: '599,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 3,
      image: '/images/ui/colbasa.png',
      price: '44,50',
      title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
      rating: 5,
      category: 'Еда',
    },
    {
      id: 6,
      image: '/images/ui/sausages.png',
      price: '159,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 7,
      image: '/images/ui/milk1.webp',
      price: '49,39',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
  ];

  return (
    <div style={{ width: '1440px', margin: '0 auto', padding: '0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px 20px',
        width: '100%',
      }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          Все новинки
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

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {news.map((news, index) => (
          <div key={index} style={{ width: '272px' }}>
            <ItemCard
              id={news.id}
              image={news.image}
              price={news.price}
              title={news.title}
              rating={news.rating}
              onAddToCart={() => console.log('В корзину:', news.title)}
              onToggleFavorite={() => console.log('В избранное:', news.title)}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
        {news.map((news, index) => (
          <div key={`copy-${index}`} style={{ width: '272px' }}>
            <ItemCard
              id={news.id}
              image={news.image}
              price={news.price}
              title={news.title}
              rating={news.rating}
              onAddToCart={() => console.log('В корзину:', news.title)}
              onToggleFavorite={() => console.log('В избранное:', news.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

//Страница все покупки
const AllBuyAgoPage = () => {
  const navigate = useNavigate();

  const buyago = [
    {
      id: 8,
      image: '/images/ui/vetchina.png',
      price: '77,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 6,
      image: '/images/ui/sausages.png',
      price: '159,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 5,
      image: '/images/ui/colbasa1.png',
      price: '599,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 7,
      image: '/images/ui/milk1.webp',
      price: '49,39',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
  ];

  return (
    <div style={{ width: '1440px', margin: '0 auto', padding: '0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px 20px',
        width: '100%',
      }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          Все покупки
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

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {buyago.map((buyago, index) => (
          <div key={index} style={{ width: '272px' }}>
            <ItemCard
              id={buyago.id}
              image={buyago.image}
              price={buyago.price}
              title={buyago.title}
              rating={buyago.rating}
              onAddToCart={() => console.log('В корзину:', buyago.title)}
              onToggleFavorite={() => console.log('В избранное:', buyago.title)}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {buyago.map((buyago, index) => (
          <div key={index} style={{ width: '272px' }}>
            <ItemCard
              id={buyago.id}
              image={buyago.image}
              price={buyago.price}
              title={buyago.title}
              rating={buyago.rating}
              onAddToCart={() => console.log('В корзину:', buyago.title)}
              onToggleFavorite={() => console.log('В избранное:', buyago.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  //Все товары
  const allProducts = [
    {
      id: 1,
      image: '/images/ui/pancakes.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Г/Ц Блинчики с мясом вес. Россия рррррррррррр',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 2,
      image: '/images/ui/milk1.webp',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
      rating: 4,
      category: 'Еда',
    },
    {
      id: 3,
      image: '/images/ui/colbasa.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскана...',
      rating: 5,
      category: 'Еда',
    },
    {
      id: 4,
      image: '/images/ui/sausages.png',
      discount: '-50%',
      price: '44,50',
      originalPrice: '50,50',
      title: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыром...',
      rating: 4,
      category: 'Еда',
    },
    {
      id: 5,
      image: '/images/ui/colbasa1.png',
      price: '599,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 6,
      image: '/images/ui/sausages.png',
      price: '159,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 7,
      image: '/images/ui/milk1.webp',
      price: '49,39',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
    {
      id: 8,
      image: '/images/ui/vetchina.png',
      price: '77,99',
      title: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
      rating: 2,
      category: 'Еда',
    },
  ];

  const handleSearch = (query) => {
    if (!query.trim()) return;
    if (!searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
    }
    if (query.trim().toLowerCase() === 'еда') {
      setFilteredProducts(allProducts.filter(p => p.category === 'Еда'));
    } else {
      setFilteredProducts(null);
    }
  };
  //Функция добавления удаления из избранного
  const toggleFavorite = (product) => {
  setFavorites(prev => {
    const exists = prev.some(p => p.id === product.id);
    if (exists) {
      return prev.filter(p => p.id !== product.id);
    } else {
      return [...prev, product];
    }
  });
};

  //Проверка в избранном ли товар
  const isFavorite = (product) => {
    return favorites.some(p => p.id === product.id);
  };

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchHistory={searchHistory}
        onSearch={handleSearch}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      {/* Скрываем баннер на страницах вакансий, контактов и о компании */}
      {location.pathname !== '/vacancies' && location.pathname !== '/contacts' && location.pathname !== '/about' && <Hero />}

      <Routes>
          <Route
            path="/"
            element={
              <>
                {filteredProducts ? (
                  <div style={{ width: '1440px', margin: '0 auto', padding: '32px 0' }}>
                    <div className="section-header">
                      <h2>Найдено по запросу: "{searchQuery}"</h2>
                    </div>
                    <div className="cards-container" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {filteredProducts.map(product => (
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
                              isFavorite={isFavorite(product)}
                            />
                          ) : (
                            <ItemCard
                              image={product.image}
                              price={product.price}
                              title={product.title}
                              rating={product.rating}
                              onAddToCart={() => console.log('В корзину:', product.title)}
                              onToggleFavorite={() => toggleFavorite(product)}
                              isFavorite={isFavorite(product)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <SpecialOffers onProductClick={() => {}} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                    <NewsFeed onProductClick={() => {}} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                    <QuickBuy onProductClick={() => {}} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                    <OffersBanner />
                    <StoreLocations />
                    <NewsSection />
                  </>
                )}
              </>
            }
          />

          <Route path="/articles" element={<AllArticlesPage />} />
          <Route path="/promotions" element={<AllPromotionsPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/buyago" element={<AllBuyAgoPage />} />
          <Route
            path="/favorites"
            element={<Wishlist favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/category/:categoryKey" element={<ProductCategory />} />
          <Route path="/about" element={<InfoPage />} />
          <Route path="/vacancies" element={<JobListings />} />
          <Route path="/contacts" element={<ContactInfo />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/delivery" element={<ShippingInfo />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>

        <Footer />
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
