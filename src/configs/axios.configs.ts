import axios from "axios";
import { API_URL } from "../constants/const";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosClient;