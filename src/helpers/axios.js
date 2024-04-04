import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { REACT_APP_BASE_URL } from "@env";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.data.error === "SESSION_NOT_FOUND" ||
      error.response.data.error === "SESSION_EXPIRED"
    ) {
      const deleteUser = async () => {
        await AsyncStorage.removeItem("userToken");
      };
      deleteUser();
    } else {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  },
);

export default api;
