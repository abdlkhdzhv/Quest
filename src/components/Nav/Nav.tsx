import React from "react";
import quest from "../../assets/quest.svg";
import style from "./Nav.module.css";
import lupa from "../../assets/лупа.svg";
import profile from "../../assets/профиль.svg";

export const Nav = () => {
  return (
    <div className={style.wrapperNav}>
      <div>
        <img src={quest} alt="" />
      </div>

      <div>
        <ul className={style.ulNav}>
          <li>Главная</li>
          <li>Каталог</li>
          <li>Подборки квестов</li>
          <li>Партнерам</li>
        </ul>
      </div>

      <div className={style.wrapperAvtorize}>
        <div>
          <img src={lupa} alt="" />
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
