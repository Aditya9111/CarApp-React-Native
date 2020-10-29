import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Order = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/NoOrder.png")}
        style={styles.noOrder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noOrder: {
    width: width,
    height: height,
  },
});

Order.navigationOptions = (navData) => {
  return {
    headerTintColor: "#FF0015",
    headerTitleStyle: { alignSelf: "center" },
  };
};

export default Order;
