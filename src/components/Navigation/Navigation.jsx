import React from 'react'
import style from './Navigation.module.css'

function Navigation() {
  return (
    <div className={style.navigation}>
        <button className={style.catalogButton}>
          <span className={style.menuIcon}>☰</span>
          <span>Каталог</span>
        </button>
        <div className={style.navItems}>
                 <div className={style.navItem}>
                   <img src="/images/heart.png" alt="Избранное" className={style.navIcon} />
                   <span className={style.navText}>Избранное</span>
                 </div>
                 <div className={style.navItem}>
                   <img src="/images/orders.png" alt="Заказы" className={style.navIcon} />
                   <span className={style.navText}>Заказы</span>
                 </div>
                 <div className={style.navItem}>
                   <img src="/images/cart.png" alt="Корзина" className={style.navIcon} />
                   <span className={style.navText}>Корзина</span>
                   <div className={style.cartBadge}>1</div>
                 </div>
          <div className={style.userItem}>
            <div className={style.avatar}>👤</div>
            <span className={style.userName}>Алексей</span>
            <span className={style.dropdown}>▼</span>
          </div>
        </div>
    </div>
  )
}

export default Navigation
