import { Link } from 'react-router-dom'
import tg from "../../../assets/тгИконка.png";
import style from './ui.module.css'

export const MainAuth = () => {
  return (
    <div className={style.wrapperSection}>
      <div className={style.contentBlock}>
        <div>
          <h3 className={style.head}><Link to={'/entry'} className='link'>Войти</Link>/<Link to={'/regist'} className='link'>Зарегистрироваться</Link></h3>
        </div>
        <ul className={style.ul}>
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
            <Link to={"/myQuests"} className="link">
              Бронирования
            </Link>
          </li>
        </ul>
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
  )
}
