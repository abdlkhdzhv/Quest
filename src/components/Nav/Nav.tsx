import quest from "../../assets/quest.svg";
import style from "./Nav.module.css";
import lupa from "../../assets/лупа.svg";
import profile from "../../assets/профиль.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Nav = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const nav = useNavigate()
  const navigate = () => {
    if(user){
      nav('/account')
    }else {
      nav('/auth')
    }
  }

  return (
    <div className={style.wrapperNav}>
      <div>
        <img src={quest} alt="" />
      </div>

      <div>
        <ul className={style.ulNav}>
          <li>
            <Link to={"/"} className="link">
              Главная
            </Link>
          </li>
          <li>
            <Link to={"/questsCompanies"} className="link">
              Квесты для компаний
            </Link>
          </li>
          <li>
            <Link to={"/myQuests"} className={style.link}>
              Ваши бронирования
            </Link>
          </li>
          {user && (<li>
            <Link to={"/myFavorite"} className={style.link}>
              Избранное
            </Link>
          </li>)}
        </ul>
      </div>

      <div className={style.wrapperAvtorize}>
        <div className={style.cart}>
          <img src={lupa} alt="" />
        </div>
        <div>
            <img src={profile} alt="" onClick={navigate}/>
        </div>
      </div>
    </div>
  );
};
