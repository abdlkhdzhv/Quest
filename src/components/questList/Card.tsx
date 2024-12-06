import { useState } from 'react';
import styles from './Card.module.css';
import imageCard from '../../assets/img/imageCard.png';
import imageCard2 from '../../assets/img/imageCard2.png';
import imageCard3 from '../../assets/img/imageCard3.png';
import { FaHeart, FaMapMarkerAlt, FaUsers, FaStar } from 'react-icons/fa';
import BookingButton from '../Buttons/Buttons';

const CardComponent = () => {
  const [liked, setLiked] = useState([false, false, false]); // Состояние для сердечков

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className={styles.cardContainer}>
      {[imageCard, imageCard2, imageCard3].map((image, index) => (
        <div className={styles.card} key={index}>
          <img src={image} alt={`Картинка ${index + 1}`} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>
            16+
            <button
              className={styles.heartButton}
              onClick={() => toggleLike(index)}
            >
              <FaHeart
                className={liked[index] ? styles.heartIconLiked : styles.heartIcon}
              />
            </button>
          </h3>

          {/* Добавление информации под картой */}
          <div className={styles.cardDetails}>
            <div className={styles.cardDetail}>
              <div className={styles.titleContainer}>
                <span className={styles.eventTitle}>Гарри и искусство магии</span>
              </div> 
              <div className={styles.rating}>
                <FaStar className={styles.starIcon} />
                <span>9.8</span>
              </div>
            </div>

            <div className={styles.cardDetailss}>
              <div className={styles.cardDetailAd}>
                <div className={styles.questAddres}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <span className={styles.addres}>Переулок Гвардейский, 54а</span>
                </div>
              </div>

              <div className={styles.playerInfoContainer}>
                <div className={styles.gameDetails}>
                  <div className={styles.playerCount}>
                    <FaUsers className={styles.icon} />
                    <span className={styles.numberOfPeople}>1 - 8 человек</span>
                  </div>

                  <div className={styles.priceDetails}>
                    <span className={styles.pryce}>От 1 000₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Добавление кнопки бронирования */}
          <div className={styles.buttonContainer}>
            <BookingButton onClick={() => console.log('Бронирование нажато!')} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
