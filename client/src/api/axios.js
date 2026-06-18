import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-zenvora.onrender.com/api",
});

export default API;