import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"MainScreen"} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
