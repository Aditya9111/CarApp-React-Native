import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Order = () => {
  return (
    <View>
      <Text>Order</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#FF0015",
  },
  headerBox: {
    alignItems: "center",

    borderBottomColor: "#FF0015",
    borderBottomWidth: 1,
  },
});

Order.navigationOptions = (navData) => {
  return {
    headerTintColor: "#FF0015",
    headerTitleStyle: { alignSelf: "center" },
  };
};

export default Order;
