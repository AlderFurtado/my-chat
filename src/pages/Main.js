import React, { useEffect, useState } from "react";
import socket from "../services/socket";

// import { Container } from './styles';

function Main() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("allPlayers", (players) => {
      setPlayers(players);
    });

    return () => {
      socket.off("AllPlayers", (players) => {
        setPlayers(players);
      });
    };
  }, []);

  return (
    <>
      <h1>dkakd</h1>
      <ul>
        {players.map(({ socket_id, name, number }) => (
          <li key={socket_id}>
            {name} - {number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
