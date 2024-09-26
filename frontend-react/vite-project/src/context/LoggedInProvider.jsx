import React, { useState } from "react";
import LoggedInContext from "./LoggedInContext";
const LoggedInProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{ LoggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};
export default LoggedInProvider;
