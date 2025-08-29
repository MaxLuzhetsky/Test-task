import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/authSlice";
import type { AppDispatch } from "../../store";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    // Validation
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include 1 uppercase and 1 special symbol"
      );
      return;
    }

    setError(""); // Clear error if validation passes
    dispatch(login({ email, password }));
  };

  return (
    <>
      <Input
        type="email"
        placeholder="Email"
        handleChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        handleChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <p style={{ color: "red", fontSize: "0.9rem", margin: 0 }}>{error}</p>
      )}
      <Button title="Login" styles="main" handleClick={handleLogin} />
    </>
  );
};

export default LoginForm;
