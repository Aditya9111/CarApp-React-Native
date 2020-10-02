import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Dimensions,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import * as firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";

import HeaderSwiperCard from "../../components/SwiperCard";

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

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.wrapper}>
          <HeaderSwiperCard />
        </View>
      </View>
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
  mainContainer: { backgroundColor: "white", height: "95%" },

  wrapper: {
    height: "35%",
    flex: 1,
  },

  nameText: {
    fontFamily: "Lora-Variable",
    fontSize: 18,
    color: "#000",
  },

  marTop: {
    marginTop: 15,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 5,
  },
  welcomeText: {
    fontFamily: "NotoSerif-Bold",
    fontSize: 20,
    color: "#FF0015",
  },
  image: {
    width: width,
    height: 200,
    alignItems: "center",
    resizeMode: "stretch",
  },
});

export default HomeScreen;
