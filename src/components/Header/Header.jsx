import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Navigation from '../Navigation/Navigation'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
        <Logo />
        <Search />
        <Navigation />
    </div>
  )
}

export default Header
