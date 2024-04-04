import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderListItem from "./OrderListItem";
import CarrierListModal from "./CarrierListModal";

const orders = [
  {
    name: "order1",
    id: "1",
    client: "Client1",
    items: ["item1", "item2", "item3"],
  },
  {
    name: "order2",
    id: "2",
    client: "Client1",
    items: ["item1", "item2", "item3"],
  },
  {
    name: "order3",
    id: "3",
    client: "Client1",
    items: ["item1", "item2", "item3"],
  },
  {
    name: "order1",
    id: "4",
    client: "Client1",
    items: ["item1", "item2", "item3"],
  },
];

const OrdersView = ({ assignPress, vis, closePress, carrierPress }) => {
  return (
    <View style={styles.container}>
      <CarrierListModal
        vis={vis}
        closePress={closePress}
        carrierPress={carrierPress}
      />
      <FlatList
        data={orders}
        renderItem={({ item }) => {
          return <OrderListItem item={item} assignPress={assignPress} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
});

export default OrdersView;
