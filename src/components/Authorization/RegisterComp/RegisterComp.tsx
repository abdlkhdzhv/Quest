import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../Firebase/authService";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Input, Tooltip, message } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./ui.module.css";
import { RootState, AppDispatch } from "../../../redux/store";

const RegisterComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch: AppDispatch = useDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return messageApi.open({
        key,
        type: "loading",
        content: "Пароли не совпадают!",
      });
    }
    const result = await dispatch(registerUser(email, password, name, surname));

    console.log(result);
    if (loading) {
      messageApi.open({
        key,
        type: "loading",
        content: "Регистрируем ваши данные...",
      });
    }
    console.log(error);

    if (!error && result) {
      messageApi.open({
        key,
        type: "success",
        content: "Регистрация успешно завершена!",
        duration: 3,
      });
      navg();
    }
  };

  const navg = () => {
    setTimeout(() => {
      navigate("/entry");
    }, 1000);
  };

  const navigate = useNavigate();

  const key = "updatable";

  const handleClick = () => {
    handleRegister();
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
  };

  return (
    <div className={style.wrapSection}>
      <div className={style.wrapContent}>
        <h2 className={style.head}>Приветствуем на странице регистрации!</h2>
        <div className={style.wrapInput}>
          <Input
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            prefix={
              <UserOutlined
                style={{
                  color: "rgba(0,0,0,.25)",
                }}
              />
            }
            suffix={
              <Tooltip title="Надо ввести свое имя: 'Умар'">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />

          <Input
            placeholder="Введите фамилию"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            prefix={
              <UserOutlined
                style={{
                  color: "rgba(0,0,0,.25)",
                }}
              />
            }
            suffix={
              <Tooltip title="Надо ввести свой логин по типу: 'Умаров'">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />

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
          {error ? "" : contextHolder}
          <Button
            className={style.btn}
            type="primary"
            loading={loading}
            onClick={handleClick}
          >
            Зарегистрироваться
          </Button>
        </div>

        <span>
          <Link to={"/entry"} className="link">
            <p className={style.p}>Войти в существующий аккаунт</p>
          </Link>
          <br />
          <br />
          <Link to={"/"} className="link">
            <p className={style.p}>Вернуться в главное меню</p>
          </Link>
        </span>

        {error && (
          <Alert
            message="Ошибка регистрации!"
            description={error}
            type="error"
            closable
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
