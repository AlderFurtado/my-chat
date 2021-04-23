import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import socket from "../../services/socket";

// import { Container } from './styles';

function Chat() {
  const room = useSelector((state) => state.room);

  useEffect(() => {
    socket.on("newPrivateMessage", (data) => {
      console.log(data);
    });
  }, []);

  const sendMessage = () => {
    const data = {
      message: "teste teste",
      roomId: room,
    };
    socket.emit("sendMessage", data);
  };
  return (
    <div>
      <div></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input type="text" placeholder="type your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
