import React from "react";

import LoginForm from "../components/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
