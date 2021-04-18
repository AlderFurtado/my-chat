import React, { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:3002");
const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  // async function getConnection() {
  //   const response = await fetch("http://localhost:3002");
  //   const data = await response.json();
  //   console.log(data);
  // }

  const logIn = () => {
    console.log("a");
    socket.emit("logIn");
    socket.on("allPlayers", (players) => {
      setPlayers(players);
    });
  };

  return (
    <div>
      <button onClick={logIn}>Entrar</button>
      <ul>
        {players.map((player) => {
          return <li key={`player${player}`}>{player}</li>;
        })}
        <li></li>
      </ul>
    </div>
  );
};

export default App;
