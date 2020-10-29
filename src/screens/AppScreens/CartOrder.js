import React from "react";
import { View, Text } from "react-native";

const CartOrder = () => {
  return (
    <View>
      <Text>Order Processing</Text>
    </View>
  );
};

CartOrder.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Cart",
    headerTintColor: "#ff0015",
  };
};

export default CartOrder;
