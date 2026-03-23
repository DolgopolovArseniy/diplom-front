import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export const getUserBySlug = async (slug) => {
  const res = await api.get(`/users/${slug}`);
  return res.data.data.user;
};

export const createTransaction = async (data) => {
  const res = await api.post("/transactions", data);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/users/me");
  return res.data;
};

export const loginApi = async (data) => {
  const res = await api.post("/users/login", data);
  return res.data;
};

export const signupApi = async (data) => {
  const res = await api.post("/users/signup", data);
  return res.data;
};
