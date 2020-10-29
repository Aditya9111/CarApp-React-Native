import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../../components/HeaderButton";
import { PRODUCT } from "../../data/dummy-data";
import ProdToCart from "../../components/ProdToCart";

const Product = (props) => {
  const productId = props.navigation.getParam("prodId");

  const selectProduct = PRODUCT.find((prod) => prod === productId);

  const detail = useSelector((state) => state.products.prod);

  const display = detail.filter((prod) => prod.id.indexOf(productId) >= 0);

  const renderProd = (itemData) => {
    return (
      <ProdToCart
        imageUrl={itemData.item.image}
        discription={itemData.item.discription}
        longDiscription={itemData.item.longDiscription}
        HATCHBACK={itemData.item.HATCHBACK}
        SEDAN={itemData.item.SEDAN}
        SUV={itemData.item.SUV}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={display}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProd}
      />
    </View>
  );
};

Product.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("prodId");
  const selectProduct = PRODUCT.find((prod) => prod.id === productId);

  return {
    headerTitle: selectProduct.title,
    headerTintColor: "#ff0015",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="ios-cart"
          onPress={() => {
            navData.navigation.navigate("CartOrder");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Product;
