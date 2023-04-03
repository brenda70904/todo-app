import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import testUsers from './lib/users'

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }
  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      console.log("validUser", validUser);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        console.log("user logged in");
      }
    } catch (e) {
      setError(e);
      console.log(e)
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if (user && user.password === password) {
      try {
        _validateToken(user.token);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )


}

export default AuthProvider;

