import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../redux/store";
import { setFilter } from "../../redux/slices/filterSlice"; 
import style from "./Banner.module.css";
import { Nav } from "../../components/Nav/Nav";

const Banner: React.FC = () => {

  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch(); 

  const handleChange = (key: keyof RootState["filters"], value: string) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <div className={style.banner}>
      <div className={style.nav}>
        <Nav />
      </div>
      <h1>QUEST В ВАШЕМ ГОРОДЕ</h1>
      <p>
        Квесты в Москве — отличная возможность для отдыха с семьёй и<br />{" "}
        друзьями. Самое время выбраться из комнаты! Квесты в реальности — <br />
        одно из самых популярных развлечений в Москве. У нас вы найдёте
        <br /> информацию о лучших квест-комнатах от разных компаний!
      </p>
      <div className={style.filters}>
        <select
          className={style.selectPlayers}
          onChange={(e: { target: { value: string } }) =>
            handleChange("questType", e.target.value)
          }
          value={filters.questType}
        >
          <option value="">Тип квеста</option>
          <option value="horror">Хоррор</option>
          <option value="adventure">Приключения</option>
        </select>

        <select
          className={style.selectPlayers}
          onChange={(e: { target: { value: string } }) =>
            handleChange("players", e.target.value)
          }
          value={filters.players}
        >
          <option value="">Игроков</option>
          <option value="2-4">2-4</option>
          <option value="5-6">5-6</option>
        </select>

        <input
          type="date"
          className={style.inputDate}
          onChange={(e: { target: { value: string } }) =>
            handleChange("date", e.target.value)
          }
          value={filters.date}
        />

        <input
          type="time"
          className={style.inputDate}
          onChange={(e: { target: { value: string } }) =>
            handleChange("time", e.target.value)
          }
          value={filters.time}
        />

        <button className={style.findButton}>Найти</button>
      </div>
    </div>
  );
};

export default Banner;
