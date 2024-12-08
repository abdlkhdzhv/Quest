import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const BookingList = () => {
  const bookings = useSelector((state: RootState) => state.bookings.bookings);

  return (
    <div>
      <h2>Ваши бронирования</h2>
      {bookings.length === 0 ? (
        <p>У вас нет забронированных квестов.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <span>{booking.questName}</span> - {booking.date} в {booking.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
