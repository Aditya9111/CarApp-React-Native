import React from "react";
import { View, Text } from "react-native";

import { PRODUCT } from "../../data/dummy-data";

const Product = (props) => {
  const productId = props.navigation.getParam("prodId");

  const selectProduct = PRODUCT.find((prod) => prod === productId);

  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};

Product.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("prodId");
  const selectProduct = PRODUCT.find((prod) => prod.id === productId);

  return {
    headerTitle: selectProduct.title,
    headerTintColor: "#ff0015",
  };
};

export default Product;
