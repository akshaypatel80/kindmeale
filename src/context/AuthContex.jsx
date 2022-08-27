import React, { createContext, useState } from "react";

export const Appcontext = createContext();

const AuthContex = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const handleLogout = () => {
    setIsAuth(false);
    setToken(null);
  };
  return (
    <Appcontext.Provider value={{ isAuth, token, handleLogin, handleLogout }}>
      {children}
    </Appcontext.Provider>
  );
};

export default AuthContex;
