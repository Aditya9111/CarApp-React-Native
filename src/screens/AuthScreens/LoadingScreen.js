import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import * as firebase from "firebase";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

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
        <FadeInView>
          <Image
            source={require("../../../assets/OnBoarding.png")}
            style={styles.image}
          />
        </FadeInView>
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
