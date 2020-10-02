import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, StyleSheet, Image } from "react-native";
import * as firebase from "firebase";
import { Shapes } from "react-native-background-shapes";

const Profile = (props) => {
  // state = {
  //   email: "",
  //   Name: "",
  // };

  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        console.log(user);
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
    <View>
      <View style={styles.marTop}>
        <Image
          source={require("../../../assets/profile.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>{email}</Text>
      </View>

      <View
        style={{
          marginRight: 8,
          marginTop: 10,
          paddingLeft: 60,
          paddingRight: 60,
        }}
      >
        <Button title="Log Out" color="#FF0015" onPress={userSignout} />
      </View>
    </View>
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
  emailText: { fontSize: 20 },
  emailContainer: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  marTop: {
    backgroundColor: "#FF0015",
    width: 100,
    height: 100,
    marginLeft: 150,
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 55,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#FF0015",
  },
  headerBox: {
    alignItems: "center",

    borderBottomColor: "#FF0015",
    borderBottomWidth: 1,
  },
});

export default Profile;
