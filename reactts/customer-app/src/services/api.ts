import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3200/api/customers",
});

export default api;
