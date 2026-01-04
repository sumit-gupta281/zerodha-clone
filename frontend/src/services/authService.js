import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // 👈 backend URL
  withCredentials: true,
});

export const loginUser = async (loginData) => {
  return API.post("/login", loginData);
};
