import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../../Firebase/authService";
import { Link } from "react-router-dom";

export const Entry = () => {
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
    </div>
  );
};
