import style from "./ui.module.css";
import CardComponent from "../Card/Card";
import QuestsInPopular from "../Quest/QuestsInPopular";
export const PopularQuest = () => {
  return (
    <div className={style.wrapSection}>
      <div className={style.head}>
      <h1>Популярные квесты</h1>
      </div>

      <div>
        <QuestsInPopular />
      </div>

      <div>
        <CardComponent />
      </div>
    </div>
  );
};
