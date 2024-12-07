import quest from "../../assets/quest.svg";
import style from "./Nav.module.css";
import lupa from "../../assets/лупа.svg";
import profile from "../../assets/профиль.svg";
import image from "../../assets/spisok.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={style.wrapperNav}>
      <div>
        <img src={quest} alt="" />
      </div>

      <div>
        <ul className={style.ulNav}>
          <li>
            <Link to={'/'} className="link">Главная</Link>
          </li>
          <li className={style.selectNav}>
            Каталог <img src={image} alt="" className={style.spisok} />
            <ul className={style.dropSel}>
              <li>
                <Link to={"/choosingQuests"} className="link">Выбор квестов</Link>
              </li>
              <li>
                <Link to={"/questsCompanies"} className="link">Квесты для компаний</Link>
              </li>
            </ul>
          </li>
          <li>Подборки квествов</li>
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
