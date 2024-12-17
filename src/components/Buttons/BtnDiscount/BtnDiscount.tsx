import React from 'react'
import style from './ui.module.css'

export const BtnDiscount = ({ txt }: {txt: string}) => {
  return (
      <button className={style.btn}>{txt}</button>
  )
}
