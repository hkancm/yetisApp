import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

const locations = [
  { latitude: 38.32756, longitude: 27.12754 },
  { latitude: 38.327877, longitude: 27.12776 },
  { latitude: 38.328341, longitude: 27.128052 },
  { latitude: 38.328757, longitude: 27.128333 },
  { latitude: 38.329082, longitude: 27.128617 },
];

const TrackMap = () => {
  const [locationIndex, setLocationIndex] = useState(0);

  const updateLocation = () => {
    setInterval(() => {
      setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 2000);
  };

  useEffect(() => {
    updateLocation();
  }, []);

  const currentLocation = locations[locationIndex];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}
    >
      <Marker coordinate={currentLocation} icon={{}} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 350,
    height: 350,
  },
});

export default TrackMap;
