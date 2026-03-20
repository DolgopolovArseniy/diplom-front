import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getUserBySlug = async (slug) => {
  const res = await api.get(`/users/${slug}`);
  return res;
};

export const createTransaction = async (data) => {
  const res = await api.post("/transactions", data);
  return res;
};
