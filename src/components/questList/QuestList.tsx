import styles from './QuestList.module.css';

const QuestMarch8 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Квесты к 8 марта</h2>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Смотреть все</button>
      </div>
    </div>
  );
};

export default QuestMarch8;