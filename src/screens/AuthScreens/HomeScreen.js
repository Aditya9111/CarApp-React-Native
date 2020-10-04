import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Dimensions,
  FlatList,
} from "react-native";
import * as firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";

import { PRODUCT } from "../../data/dummy-data";
import HeaderSwiperCard from "../../components/SwiperCard";
import SecondSwiperCard from "../../components/SecondSwiperCard";
import ProductGrid from "../../components/ProductGrid";
import Highlights from "../../components/Highlights";
import UserStoriesGrid from "../../components/UserStoriesGrid";

const { width } = Dimensions.get("window");

const HomeScreen = (props) => {
  const [Name, setName] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      } else {
        props.navigation.navigate("OnBoarding");
      }
    });
  }, []);

  LayoutAnimation.easeInEaseOut();

  const renderGridItem = (itemData) => {
    return (
      <ProductGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Product",
            params: { prodId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      {/* ////////////////////////////////////// Welcome {Name} ////////////////////////// */}
      <View style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.container}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>
            <View>
              <Text style={styles.nameText}>{Name}</Text>
            </View>
          </View>
          {/* ///////////////////////////Top Swiper/////////////////////////////////////// */}
          <View style={styles.wrapper}>
            <HeaderSwiperCard />
          </View>
        </View>
        {/* //////////////////// Products Container////////////////////////// */}
        <View style={styles.prodContainer}>
          <View style={styles.headTextContainer}>
            <Text style={styles.headText}>Which service would you like ?</Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              nestedScrollEnabled={true}
              numColumns={2}
              data={PRODUCT}
              renderItem={renderGridItem}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        </View>
      </View>
      {/* //////////////////////Offers Card//////////////////////////////////////// */}
      <View style={styles.wrapper}>
        <SecondSwiperCard />
      </View>
      {/* //////////////////////////////////////Highlight Card //////////////////////////////////////////// */}
      <View>
        <Highlights />
      </View>

      {/* ///////////////////////////////////////// User Card ///////////////////////// */}

      <UserStoriesGrid />

      <View style={{ height: 50, backgroundColor: "white" }} />
    </ScrollView>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTintColor: "#ff0015",
    headerTitleStyle: { alignSelf: "center" },
  };
};

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "white", height: 300 },
  prodContainer: { backgroundColor: "white" },

  wrapper: {
    flex: 1,
  },

  nameText: {
    fontFamily: "Lora-Variable",
    fontSize: 18,
    color: "#000",
  },

  container: {
    marginLeft: 20,
    marginTop: 5,
  },
  welcomeText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
    color: "#000",
  },
  nameText: {
    fontSize: 15,
    marginLeft: 5,
    marginVertical: 7,
    fontFamily: "Montserrat-Regular",
    color: "#000",
  },
  image: {
    width: width,
    height: 200,
    alignItems: "center",
    resizeMode: "stretch",
  },

  headText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
    color: "#000",
  },
  headTextContainer: { marginHorizontal: 20 },
});

export default HomeScreen;
