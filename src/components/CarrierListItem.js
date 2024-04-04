import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CarrierListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
});

export default CarrierListItem;
