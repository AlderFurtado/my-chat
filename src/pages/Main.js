import React, { useEffect, useState } from "react";
import socket from "../services/socket";

import ListUsersToTalk from "../components/ListUsersToTalk/index";
import Chat from "../components/Chat/index";

import { useSelector } from "react-redux";
function Main() {
  const [players, setPlayers] = useState([]);

  const room = useSelector((state) => state.room);

  useEffect(() => {
    socket.on("allPlayers", (players) => {
      setPlayers(players);
    });
    console.log(players);

    return () => {
      socket.off("AllPlayers", (players) => {
        setPlayers(players);
      });
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "90vh" }}>
      <ListUsersToTalk players={players} />
      {room != null && <Chat />}
    </div>
  );
}

export default Main;
