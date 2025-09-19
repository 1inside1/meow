import React from 'react';
import '../assets/StoreLocations.css';

const StoreLocations = () => {
  const locations = [
    { name: 'п.Щельяюр', active: true },
    { name: 'д.Вертеп', active: false },
    { name: 'с.Краснобор', active: false },
    { name: 'д.Диюр', active: false },
  ];

  return (
    <section className="our-stores-section">
      <h2>Наши магазины</h2>
      <div className="map-filter-container">
        <div className="map-filter">
          {locations.map((loc) => (
            <button
              key={loc.name}
              className={`filter-btn ${loc.active ? 'active' : ''}`}
              onClick={() => console.log('Фильтр:', loc.name)}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>
      <img 
        src='/images/ui/map.png' 
        alt="Карта магазинов" 
        className="map-image"
      />
    </section>
  );
};

export default StoreLocations;