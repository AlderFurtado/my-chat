import React from "react";

import socket from "../../services/socket";

import { useDispatch } from "react-redux";

function ListUsersToTalk({ players }) {
  const dispatch = useDispatch();
  const checkRoom = (player) => {
    socket.emit("checkRoom", player);
    socket.on("getRoom", (roomId) => {
      dispatch({ type: "OPEN_ROOM", payload: roomId });
    });
  };

  return (
    <div>
      <h1>Usuários online</h1>
      <ul>
        {players.map(({ socketId, name, number }) => (
          <li
            key={socketId}
            onClick={() => checkRoom({ socketId, name, number })}
          >
            {name} - {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsersToTalk;
