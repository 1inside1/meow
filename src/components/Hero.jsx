// Главный баннер - обновлен в общем бэкапе
import React from 'react';
import '../assets/Hero.css'
const heroBg = '/images/ui/hero-bg1.png'; 

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroBg} alt="Доставка бесплатно" />
    </section>
  );
};


export default Hero;
