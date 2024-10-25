import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-project-1.onrender.com",
});

export default axiosInstance;
