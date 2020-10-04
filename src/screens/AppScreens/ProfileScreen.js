import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Profile = (props) => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setName(user.displayName);
      } else {
        props.navigation.navigate("OnBoarding");
      }
    });
  }, []);

  // componentWillUnmount() {
  //   // fix Warning: Can't perform a React state update on an unmounted component
  //   this.setState = (email) => {
  //     return;
  //   };
  // }

  ///////////////////////////////////////// Profile Code////////////////////////////////////
  const userSignout = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.icon}>
          <Image
            source={require("../../../assets/profile.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>{Name}</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>

      <View style={styles.screenContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Order")}
          style={styles.section}
        >
          <Icon name="md-cart" size={25} style={{ color: "#ff0015" }} />
          <Text style={styles.sectionText}>Orders</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            style={{ color: "#ff0015" }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section} onPress={() => {}}>
          <Icon name="md-gift" size={25} style={{ color: "#ff0015" }} />
          <Text style={styles.sectionText}>Refer and Earn</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            style={{ color: "#ff0015" }}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.section} onPress={() => {}}>
            <Icon name="md-list" size={25} style={{ color: "#ff0015" }} />
            <Text style={styles.sectionText}>Terms and Conditions</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              style={{ color: "#ff0015" }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.section} onPress={() => {}}>
            <MaterialIcons
              name="headset-mic"
              size={25}
              style={{ color: "#ff0015" }}
            />
            <Text style={styles.sectionText}>Contact Us</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              style={{ color: "#ff0015" }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.section} onPress={() => {}}>
            <MaterialIcons
              name="feedback"
              size={25}
              style={{ color: "#ff0015" }}
            />
            <Text style={styles.sectionText}>Give feedback</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              style={{ color: "#ff0015" }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.section} onPress={() => {}}>
            <MaterialIcons
              name="description"
              size={25}
              style={{ color: "#ff0015" }}
            />
            <Text style={styles.sectionText}>About</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              style={{ color: "#ff0015" }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOut} onPress={userSignout}>
          <Icon
            name="md-log-out"
            size={25}
            style={{ color: "#ff0015", marginRight: 20 }}
          />
          <Text style={styles.sectionText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

Profile.navigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
    headerTintColor: "#ff0015",
    headerTitleStyle: { alignSelf: "center" },
  };
};

const styles = StyleSheet.create({
  icon: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  profileContainer: {
    height: 240,
    backgroundColor: "white",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 3,
    marginBottom: 10,
  },

  emailText: {
    fontSize: 20,
    marginTop: 15,
    color: "#000",
    fontFamily: "Montserrat-Regular",
  },
  emailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
  },

  screenContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "white",
    height: 440,
    elevation: 3,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

  signOut: {
    flexDirection: "row",

    marginHorizontal: 15,
    paddingVertical: 5,
  },

  sectionText: {
    color: "#000",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },
});

export default Profile;
