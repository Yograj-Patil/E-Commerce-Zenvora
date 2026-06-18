import axios from "axios";

const API = axios.create({
  baseURL: "https://zenvora-backend.onrender.com/api",
});

export default API;