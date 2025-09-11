import React from 'react'
import style from './Banner.module.css'

function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.content}>
        <div className={style.text}>
          <h1>Доставка бесплатно от 1000 ₽</h1>
        </div>
        <div className={style.image}>
          <img src="/images/products.png" alt="Продукты" className={style.productImage} />
        </div>
      </div>
      <div className={style.pattern}></div>
    </div>
  )
}

export default Banner
