import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import TrackMap from "../components/TrackMap";
import OrdersView from "../components/OrdersView";
import CarrierView from "../components/CarrierView";
const MainScreen = () => {
  const { user } = useContext(AuthContext);

  const [modelOpen, setModelOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {user.userType === "client" ? (
        <TrackMap />
      ) : user.userType === "admin" ? (
        <OrdersView
          assignPress={() => {
            setModelOpen(true);
          }}
          closePress={() => {
            setModelOpen(false);
          }}
          vis={modelOpen}
        />
      ) : (
        <CarrierView />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 350,
    height: 350,
  },
});

export default MainScreen;
