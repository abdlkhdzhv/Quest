import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../../Firebase/authService";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Tooltip, message } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./ui.module.css";
import { AppDispatch, RootState } from "../../../redux/store";
import { useState } from "react";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);
  const [messageApi, contextHolder] = message.useMessage();
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const key = "updatable";

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

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
    }, 2000)
  };

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Выполняется вход...",
    });
    if (!error) {
      messageApi.open({
        key,
        type: "success",
        content: "Вы успешно вошли в свой аккаунт!",
        duration: 3,
      });
      setTimeout(() => {navigate('/account')}, 2000)
    } else {
      messageApi.open({
        key,
        type: "loading",
        content: "Неверные данные,проверьте логин или пароль!",
        duration: 3,
      });
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    enterLoading(0);
    handleLogin();
    openMessage();
  };

  return (
    <div className={style.wrapSection}>
      <div className={style.wrapContent}>
        <h2 className={style.head}>Добро пожаловать на страницу входа!</h2>

        <div className={style.input}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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

          <div className={style.wrapBtns}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {contextHolder}
            <Link to={""}>
              <Button
                className={style.btn}
                type="primary"
                loading={loadings[0]}
                onClick={handleClick}
              >
                Войти
              </Button>
            </Link>

            <span className={style.span}>
              <Link to={"/regist"} className="link">
                <span className={style.btn2} onClick={handleLogout}>
                  Вернуться в регистрацию
                </span>
              </Link>
            </span>
          </div>
        </div>

        <div></div>

        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </div>
    </div>
  );
};
