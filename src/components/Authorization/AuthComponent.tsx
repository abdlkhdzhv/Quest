import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../firebase/authService";
import { Link } from "react-router-dom";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <Link to={'/regist'}><button onClick={handleLogout} disabled={loading}>Logout</button></Link>
          <Link to={'/'}><button>Перейти в главное меню</button></Link>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={'/'}><button onClick={handleLogin} disabled={loading}>Login</button></Link>
          <Link to={'/regist'}><button onClick={handleLogout} disabled={loading}>Logout</button></Link>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthComponent;
