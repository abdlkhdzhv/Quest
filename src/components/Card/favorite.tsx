import styles from "./GridCard.module.css";
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const QuestGrid = () => {

  const navigate = useNavigate();

  const handleCardClick = (quest) => {
    navigate(`/aboutQuest/${quest.id}`, { state: { quest } });
  };

  const quests = useSelector((state: RootState) => state.favorite.favoriteMovie || []);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {quests.map((quest) => (
          <div className={styles.gridItem} key={quest.id} onClick={() => handleCardClick(quest)}>
            <img
              src={quest.image}
              alt="Картинка квеста"
              className={styles.gridImage}
            />
            <div className={styles.gridContent}>
              <div className={styles.gridTitle}>
                <h2>{quest.title}</h2>
                <h3 className={styles.gridAge}>{quest.minAge}+</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestGrid;
