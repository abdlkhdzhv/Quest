import { FC } from "react";
import style from "./Button.module.css";
import { Button, Popconfirm, PopconfirmProps, message } from "antd";

interface BookingButtonProps {
  onClick?: () => void; 
}

const BookingButton: FC<BookingButtonProps> = ({ onClick }) => {

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Бронирование успешно завершено!');
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Вы отменили действие!');
  };

  return (
    <Popconfirm
    title="Подтверждение бронирования"
    description="Вы действительно хотите забронировать этот квест?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
    <Button onClick={onClick} className={style.bookingButton}>Бронирование</Button>
  </Popconfirm>
  );
};

export default BookingButton;

