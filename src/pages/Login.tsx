import React from "react";

import LoginForm from "../components/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Welcome</h1>
        <p className="login__subtitle">
          Log in to continue exploring your courses and expanding your skills!
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
