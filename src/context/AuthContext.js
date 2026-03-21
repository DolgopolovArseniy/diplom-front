import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const isAuthenticated = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  function logout() {
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getMe();
        setUser(user);
      } catch {
        logout();
      }
    }

    if (token) fetchUser();
  }, []);

  function login(newToken, newUser) {
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
