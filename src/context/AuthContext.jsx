/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const isAuthenticated = !!token;

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        logout();
      }
    }

    if (token && !user) {
      fetchUser();
    }
  }, [token, user]);

  function login(newToken, newUser) {
    localStorage.setItem("token", newToken);

    setToken(newToken);
    setUser(newUser);
  }

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
