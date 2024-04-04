import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainStack";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import io from "socket.io-client";

export default function App() {
  useEffect(() => {
    const socket = io("http://192.168.1.3:5000");
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <MainStack />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
