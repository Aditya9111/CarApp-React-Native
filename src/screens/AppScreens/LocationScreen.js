import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Locations = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/NoLocation.png")}
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

Locations.navigationOptions = (navData) => {
  return {
    headerTitle: "My Address",
    headerTintColor: "#ff0015",
    headerTitleStyle: { alignSelf: "center" },
  };
};

export default Locations;
