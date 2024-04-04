import React from "react";
import { FlatList, Modal, View, StyleSheet, Text } from "react-native";
import CarrierListItem from "./CarrierListItem";
import { AntDesign } from "@expo/vector-icons";

const carriers = ["Carrier1", "Carrier2", "Carrier3"];
const CarrierListModal = ({ vis, closePress }) => {
  return (
    <Modal style={styles.container} transparent={true} visible={vis}>
      <View style={styles.wrapper}>
        <View style={styles.centerView}>
          <AntDesign
            onPress={closePress}
            name="closesquare"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
          />
          <FlatList
            style={styles.list}
            data={carriers}
            renderItem={({ item }) => {
              return (
                <CarrierListItem
                  item={item}
                  onPress={() => {
                    console.log(item);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    height: "100%",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  centerView: {
    width: "75%",
    aspectRatio: 1,
    backgroundColor: "white",
  },
  list: {
    width: "100%",
  },
});

export default CarrierListModal;
