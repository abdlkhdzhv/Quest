import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const BookingList = () => {
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const now = new Date();
  const currentTime = now.toLocaleTimeString("ru-RU");

  const date = new Date();
  const currentDate = date.toLocaleDateString("ru-RU");
  return (
    <div>
      <h2>Ваши бронирования</h2>
      {bookings.length === 0 ? (
        <p>У вас нет забронированных квестов.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <span>{booking.questName}</span> - {currentDate} в {currentTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
