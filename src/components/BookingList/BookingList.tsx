import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Nav } from "../Nav/Nav";
import style from './ui.module.css'

const BookingList = () => {
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const now = new Date();
  const currentTime = now.toLocaleTimeString("ru-RU");

  const date = new Date();
  const currentDate = date.toLocaleDateString("ru-RU");
  return (
    <div className={style.wrapSection}>
      <div className={style.nav}>
        <Nav />
      </div>
      <h2 className={style.nameSection}>Ваши бронирования</h2>
      {bookings.length === 0 ? (
        <h1 className={style.notQuest}>У вас нет забронированных квестов.</h1>
      ) : (
        <ul className={style.cardsBooking}>
          {bookings.map((booking) => (
            <li key={booking.id} className={style.booking}>
              <h2 className={style.questName}>{booking.questName}</h2> 
              <p className={style.pQuest}>Дата: {currentDate}</p>  
              <p className={style.pQuest}>Время бронирования: {currentTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
