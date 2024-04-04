import React, { createContext, useEffect, useState } from "react";
import api from "../helpers/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      setToken(userToken);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  const login = (data) => {
    return api
      .post("/login", { email: data.email, password: data.password })
      .then(async (res) => {
        if (res.data.token) {
          await AsyncStorage.setItem("token", res.data.token);
          setToken(res.data.token);
          setUser(res.data.user);
        }
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <AuthContext.Provider value={{ login, user, token }}>
      {props.children}
    </AuthContext.Provider>
  );
};
