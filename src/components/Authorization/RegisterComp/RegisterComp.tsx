import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../Firebase/authService";
import { Link } from "react-router-dom";
import { Button, Input, Tooltip, message } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./ui.module.css";

const RegisterComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    dispatch(registerUser(email, password));
  };

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 2000);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Загрузка...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Регистрация успешно завершена!',
        duration: 3,
      });
    }, 2000);
  };

  const handleClick = () => {
    handleRegister();
    enterLoading(0);
    openMessage()
  };

  

  return (
    <div className={style.wrapSection}>
      <div className={style.wrapContent}>
        <h2 className={style.head}>Приветствуем на странице регистрации!</h2>
        <div className={style.wrapInput}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите логин"
            prefix={
              <UserOutlined
                style={{
                  color: "rgba(0,0,0,.25)",
                }}
              />
            }
            suffix={
              <Tooltip title="Надо ввести свой логин по типу: 'username@gmail.com'">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />

          <Input.Password
            placeholder="Введите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Input.Password
            placeholder="Подтвердите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
            {contextHolder}
          <Button
            className={style.btn}
            type="primary"
            loading={loadings[0]}
            onClick={handleClick}
          >
            Зарегистрироваться
          </Button>
        </div>

        <span>
        <Link to={"/entry"} className="link">
        <p className={style.p}>Войти в существующий аккаунт</p>
        </Link><br /><br />
        <Link to={"/"} className="link">
          <p className={style.p}>Вернуться в главное меню</p>
        </Link>
        </span>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default RegisterComponent;
