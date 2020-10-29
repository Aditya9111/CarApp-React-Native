import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
export default function OnBoarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide}>
          {/* Image - 1 */}
          <Image source={require("../assets/i1.png")} style={styles.image1} />
          <Text style={styles.text}>Give us your address</Text>
        </View>
        <View style={styles.slide}>
          {/* Image - 2 */}

          <Image source={require("../assets/i2.png")} style={styles.image2} />
          <Text style={styles.text}>We clean your car</Text>
        </View>
        <View style={styles.slide}>
          {/* Image - 3 */}

          <Image source={require("../assets/i3.png")} style={styles.image3} />
        </View>
      </Swiper>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <View style={styles.signupContainer}>
              <Text style={styles.signup}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <View style={styles.loginContainer}>
              <Text style={styles.login}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

OnBoarding.navigationOptions = () => {
  return {
    headerTitle: "Welcome",
    headerTintColor: "#ff4453",
  };
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    color: "#FF0015",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },

  image1: {
    width: 380,
    height: 320,
    alignItems: "center",
    resizeMode: "stretch",
  },
  image2: {
    width: 400,
    height: 320,
    alignItems: "center",
    resizeMode: "stretch",
  },
  image3: {
    width: 270,
    height: 480,
    alignItems: "center",
    resizeMode: "stretch",
  },
  buttonContainer: {
    bottom: 15,
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 105,
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: "#FF0015",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  signup: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderColor: "#FF0015",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#FF0015",
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "#FF0015",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: "#FF0015",
    width: 15,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
});
