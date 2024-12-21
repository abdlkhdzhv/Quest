import { FC } from "react";
import style from "./Button.module.css";
import { Button, Popconfirm, PopconfirmProps, message } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface BookingButtonProps {
  onClick?: () => void; 
}

const BookingButton: FC<BookingButtonProps> = ({ onClick }) => {

  const { user } = useSelector((state: RootState) => state.auth);

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    if(user){
      onClick()
      message.success('Бронирование успешно завершено!');
    }else {
      message.error('Необходимо авторизоваться!');
    }
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
    <Button className={style.bookingButton}>Бронирование</Button>
  </Popconfirm>
  );
};

export default BookingButton;

