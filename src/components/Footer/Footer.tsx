import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.section}>
      <div className={style.content}>
        <h1 className={style.dis}><span className={style.discount}>Скидка 25%</span> на квест</h1>
        <h1 className={style.head}>"Тайная комната"</h1>
        <button className={style.btn}>Смотреть предложение</button>
      </div>
      <div className={style.image}>
      </div>
    </div>
  );
};
