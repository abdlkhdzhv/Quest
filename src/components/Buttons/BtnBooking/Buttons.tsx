
import React from "react";
import style from "./Button.module.css";

interface BookingButtonProps {
  onClick?: () => void; // Функция для обработки кликов (опционально)
}

const BookingButton: React.FC<BookingButtonProps> = ({ onClick }) => {
  return (
    <button className={style.bookingButton} onClick={onClick}>
      Бронирование
    </button>
  );
};

export default BookingButton;

