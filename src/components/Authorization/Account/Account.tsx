import style from "./ui.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import img from "../../../assets/знакВхода.svg";
import img2 from "../../../assets/bron.svg";
import { Link } from "react-router-dom";
import img3 from "../../../assets/izbrn.svg";
import img4 from "../../../assets/viyti.svg";
import tg from "../../../assets/тгИконка.png";
import img5 from '../../../assets/glavnaya.svg'
import { logoutUser } from "../../../Firebase/authService";

export const Account = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={style.wrapSection}>
      <div className={style.wrapContent}>
        <div className={style.wrapHeader}>
          <div className={style.wrapProfile}>
            <img src={img} alt="" /> {user.displayName}
          </div>

          <div className={style.wrapProfile}>
            <img src={img5} alt="" />{" "}
            <Link to={"/"} className="link">
              Главная
            </Link>
          </div>

          <div className={style.wrapProfile}>
            <img src={img2} alt="" />{" "}
            <Link to={"/myQuests"} className="link">
              Бронирование
            </Link>
          </div>

          <div className={style.wrapProfile}>
            <img src={img3} alt="" />{" "}
            <Link to={"/myQuests"} className="link">
              Избранное
            </Link>
          </div>

          <div className={style.wrapProfile}>
            <img src={img4} alt="" />{" "}
            <Link to={"/entry"} className="link" onClick={handleLogout}>
              Выйти
            </Link>
          </div>
        </div>

        <div className={style.footer}>
          <hr />
          <p>Связаться с нами</p>
          <div>
            <img
              src={tg}
              alt=""
              style={{ width: "40px", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
