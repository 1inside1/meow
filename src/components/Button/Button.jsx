import React from 'react'
import style from './Button.module.css'

function Button({text, textColor}) {
  return (
    <div>
        <button className={style.button} style={{color: textColor}}>{text}</button>
    </div>
  )
}

export default Button
