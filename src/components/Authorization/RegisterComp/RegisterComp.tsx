import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../Firebase/authService";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(registerUser(email, password));
  };

  return (
    <div>
      <h2>Register</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Link to={'/auth'}><button onClick={handleRegister} disabled={loading}>Register</button></Link>
      <Link to={'/'}><button>Перейти в главное меню</button></Link>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RegisterComponent;
