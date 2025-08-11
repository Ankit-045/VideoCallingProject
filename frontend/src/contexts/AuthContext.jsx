import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8000/api/v1/users"
});

export const AuthProvider = ({ children }) => {
  // initialize userData from localStorage
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    return token ? { username, token } : null;
  });

  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name,
        username,
        password
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message || "User Registered";
      }
      throw new Error(request.data.message || "Registration failed");
    } catch (err) {
      if (err.response) {
        throw new Error(err.response.data.message || "Registration failed");
      }
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await client.post("/login", { username, password });
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        setUserData({ username, token: response.data.token });
        // Navigate to home page after successful login
        router("/home");
        return response.data.message || "Login successful";
      }
      throw new Error(response.data.message || "Login failed");
    } catch (err) {
      if (err.response) {
        throw new Error(err.response.data.message || "Login failed");
      }
      throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/history", {
        params: { token: localStorage.getItem("token") }
      });
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/history", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode
      });
      return request;
    } catch (e) {
      throw e;
    }
  };

  const data = {
    userData,
    setUserData,
    addToUserHistory,
    getHistoryOfUser,
    handleRegister,
    handleLogin
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};
