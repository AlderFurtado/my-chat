import React, { useState } from "react";

// import { Container } from './styles';

function Login({ logIn }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        logIn(name, number);
      }}
    >
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
