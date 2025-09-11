import React from 'react'
import style from './Search.module.css'

function Search() {
  return (
    <div className={style.search}>
        <input 
          type="text" 
          placeholder="Найти товар" 
          className={style.input}
        />
        <button className={style.searchButton}>🔍</button>
    </div>
  )
}

export default Search
