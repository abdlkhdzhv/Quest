import { useState, useEffect } from "react";


import styles from "./Card.module.css";


import {  useNavigate } from "react-router-dom";


interface Quest {
  id: number;
  title: string;
  image: string;
  rating: number;
  address: string;
  price: string;
  minAge: number;
  peopleCount: string;
}

const CardComponent = () => {



  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopular, setShowPopular] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const response = await fetch(
          "https://6766ac52410f8499965847c7.mockapi.io/api/v1/lists"
        );
        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data: Quest[] = await response.json();
        setQuests(data);
      } catch (err: unknown) {
        console.error("Ошибка при загрузке данных:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };
    

    fetchQuests();
  }, []);


  const filteredQuests = showPopular
    ? quests.filter((quest) => quest.rating >= 9.0)
    : quests;



  const navigate = useNavigate();

  const handleCardClick = (quest: Quest) => {
    navigate(`/aboutQuest/${quest.id}`, { state: { quest } });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleButton}>
        <h1>Квест</h1>
        <button
          onClick={() => setShowPopular(!showPopular)}
          className={styles.toggleButton}
        >
          {showPopular ? "Показать все" : "Показать популярные"}
        </button>
      </div>

      <div className={styles.cardContainer}>
        {filteredQuests.map((quest) => (
          
          <div className={styles.card} key={quest.id}   onClick={() => handleCardClick(quest)}>
            <img
              src={quest.image}
              alt="Картинка квеста"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <div className={styles.title}>
                <h2>{quest.title}</h2>
                <h3 className={styles.cardTitle}>{quest.minAge}+</h3>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;