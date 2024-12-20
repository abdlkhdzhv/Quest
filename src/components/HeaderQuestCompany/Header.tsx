import { Nav } from '../Nav/Nav'
import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.nav}>
        <Nav />
        </div>
      <h1 className={style.headQuest}>QUEST - КВЕСТЫ ДЛЯ КОМПАНИЙ</h1>
      <p className={style.infoQuest}>
        Квесты в Москве — отличная возможность для отдыха с семьёй и<br />{" "}
        друзьями. Самое время выбраться из комнаты! Квесты в реальности — <br />
        одно из самых популярных развлечений в Москве. У нас вы найдёте
        <br /> информацию о лучших квест-комнатах от разных компаний!
      </p>
    </div>
  )
}
