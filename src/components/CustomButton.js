import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    padding: 5,
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
export default CustomButton;
