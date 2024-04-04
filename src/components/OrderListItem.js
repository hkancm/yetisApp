import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const OrderListItem = ({ item, assignPress }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsOpen(!isOpen)}
    >
      <Text>
        {item.name} - {item.id}{" "}
      </Text>
      {isOpen && (
        <View style={styles.flatLWrapper}>
          <FlatList
            style={styles.flatL}
            data={item.items}
            renderItem={({ item }) => {
              return <Text>{item}</Text>;
            }}
          />
          <TouchableOpacity style={styles.button} onPress={assignPress}>
            <Text>Assign</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 4,
    paddingRight: 15,
  },
  flatLWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flatL: {
    padding: 15,
  },
  button: {
    width: 50,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderListItem;
