import React, { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";
import * as Location from "expo-location";

export default function CarrierView() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [updatingLocation, setUpdatingLocation] = useState(true);

  useEffect(() => {
    let intervalId;

    if (updatingLocation) {
      intervalId = setInterval(async () => {
        await updateLocation();
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [updatingLocation]);

  const updateLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg("Error getting location");
    }
  };
  const toggleSwitch = () => {
    setUpdatingLocation((previousState) => !previousState);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 10 }}>
        Konum güncellemesi: {updatingLocation ? "Açık" : "Kapalı"}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={updatingLocation ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={updatingLocation}
      />
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
