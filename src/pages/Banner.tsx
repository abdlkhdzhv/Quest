import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Импортируем хук useSelector для доступа к состоянию Redux и useDispatch для отправки действий
import { RootState } from "../redux/store";
import { setFilter } from "../redux/slices/filterSlice"; // Импортируем тип RootState и экшн setFilter из store
import style from "./Banner.module.css";
import { Nav } from "../components/Nav/Nav";

const Banner: React.FC = () => {
  // Получаем текущие фильтры из состояния Redux
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch(); // Получаем функцию dispatch для отправки экшенов в Redux

  // Функция для обработки изменений в формах фильтров
  const handleChange = (key: keyof RootState["filters"], value: string) => {
    // Отправляем экшен с изменениями фильтров
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
        {/* Фильтр для типа квеста */}
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

        {/* Фильтр для количества игроков */}
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

        {/* Фильтр для выбора даты */}
        <input
          type="date"
          className={style.inputDate}
          onChange={(e: { target: { value: string } }) =>
            handleChange("date", e.target.value)
          }
          value={filters.date}
        />

        {/* Фильтр для выбора времени */}
        <input
          type="time"
          className={style.inputDate}
          onChange={(e: { target: { value: string } }) =>
            handleChange("time", e.target.value)
          }
          value={filters.time}
        />

        {/* Кнопка для поиска */}
        <button className={style.findButton}>Найти</button>
      </div>
    </div>
  );
};

export default Banner;
