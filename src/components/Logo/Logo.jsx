import React from 'react'
import style from './Logo.module.css'

function Logo() {
  return (
    <div className={style.logo}>
        <img src="/images/logo.png" alt="Логотип" className={style.icon} />
        <h1 className={style.title}>СЕВЕРЯНОЧКА</h1>
    </div>
  )
}

export default Logo
