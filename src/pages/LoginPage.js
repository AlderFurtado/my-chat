import React from "react";

import socket from "../services/socket";
import Login from "../components/Login";
function LoginPage({ setUser }) {
  const logIn = (name, number) => {
    socket.emit("logIn", { name, number });
    socket.on("user.registered", ({ isRegistered, ...data }) => {
      if (isRegistered) setUser({ ...data });
    });
  };

  return (
    <>
      <Login logIn={logIn} />
    </>
  );
}

export default LoginPage;
