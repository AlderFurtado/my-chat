import React, { useState } from "react";
import UserContext from "./contexts/userContext";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext>
      {user ? <Main /> : <LoginPage setUser={setUser} />}
    </UserContext>
  );
};

export default App;
