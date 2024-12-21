import  { useState } from "react";
import styles from "./QuestCard.module.css";
import { FaMapMarkerAlt, FaUsers, FaStar, FaRubleSign, FaHeart } from "react-icons/fa";
import BookingButton from "../Buttons/BtnBooking/Buttons";
import { addBooking } from "../../redux/slices/bookingSlice";
import { addFavoriteMovie } from "../../redux/slices/addFavoriteQuest";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const QuestCard = () => {
  const location = useLocation();
  const quest = location.state?.quest;

  if (!quest) {
    return <p>Квест не найден</p>;
  }

  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    dispatch(addFavoriteMovie(quest));
  };

  const { date, time } = useSelector((state: RootState) => state.filters);

  const handleBooking = (questName: string) => {
    const bookingDate = date || "2024-12-07";
    const bookingTime = time || "12:00";
    dispatch(addBooking({ questName, date: bookingDate, time: bookingTime }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={quest.image}
          alt={`Картинка: ${quest.title}`}
          className={styles.poster}
        />
        <BookingButton onClick={() => handleBooking(quest.title)} />
      </div>


      <div className={styles.details}>
        <div className={styles.header}>
          <h1 className={styles.title}>{quest.title}</h1>
          <FaHeart
            className={`${styles.heartIcon} ${isLiked ? styles.activeHeart : ""}`}
            onClick={toggleLike}
          />
        </div>
        <div className={styles.meta}></div>
        <div className={styles.cardDetails}>
          
          <div className={styles.rating}>
            <FaStar className={styles.starIcon} />
            <span>{quest.rating}</span>
          </div>

          <div className={styles.price}>
          <span>
            <FaRubleSign className={styles.icon} />
            {quest.price}
          </span>
          </div>

          <div className={styles.gameDetails}>
            <FaUsers className={styles.icon} />
            <span>{quest.peopleCount}</span>
          </div>

        </div>
        <p className={styles.description}>
          {quest.description || "Описание отсутствует."}
        </p>
      </div>
    </div>
  );
};

export default QuestCard;
