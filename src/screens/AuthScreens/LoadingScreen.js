import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    this._isMounted = true;
    this.unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("OnBoarding");
      }
    });
  }

  componentWillUnMount() {
    this._isMounted = false;
    this.unsubscribeAuth();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator color="#FF0015" size="large" /> */}

        <Image
          source={require("../../../assets/OnBoarding.png")}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0015",
  },

  image: {
    height: 100,
    width: 200,
    resizeMode: "stretch",
  },
});
