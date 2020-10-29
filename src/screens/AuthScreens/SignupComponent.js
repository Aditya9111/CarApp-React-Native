import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as firebase from "firebase";

export default class SignUp extends React.Component {
  static navigationOptions = { title: "Sign Up", headerTintColor: "#FF0015" };

  constructor(props) {
    super(props);
    this.state = {
      borderColor: null,
      Name: "",
      email: "",
      password: "",
    };
  }

  onFocus(value) {
    this.setState({
      borderColor: value,
    });
  }

  ////////////////////////////// Write User Data //////////////////////////////////////////////

  // writeUserData(Name, Phone) {
  //   firebase
  //     .database()
  //     .ref("user/")
  //     .push({
  //       name: Name,
  //       Phone: Phone,
  //     })
  //     .catch((error) => {
  //       Alert.alert(error.message);
  //     });
  // }

  /////////////////////////////////// Firebase /////////////////////////////////////////////////////

  userSignup(email, pass) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.Name,
        });
      })
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.text}>Sign Up with Email and Password</Text>

        {/* ////////////////////////////////////// Name ///////////////////////////////////////////// */}

        <View style={styles.action}>
          <View
            style={[
              styles.section,
              {
                borderColor:
                  this.state.borderColor == "Name" ? "#FF0015" : "gray",
              },
            ]}
          >
            <MaterialIcons
              name="portrait"
              size={25}
              color={this.state.borderColor == "Name" ? "#FF0015" : "gray"}
            />
            {/* TextInput */}

            <TextInput
              value={this.state.Name}
              onChangeText={(text) => this.setState({ Name: text })}
              placeholder="Full Name"
              style={[
                styles.textInput,
                {
                  borderColor:
                    this.state.borderColor == "Name" ? "#FF0015" : "gray",
                },
              ]}
              onFocus={() => this.onFocus("Name")}
            />
          </View>
        </View>

        {/* //////////////////////////////// Phone ///////////////////////////////// */}

        {/* First Box */}

        <View style={styles.action}>
          <View
            style={[
              styles.section,
              {
                borderColor:
                  this.state.borderColor == "email" ? "#FF0015" : "gray",
              },
            ]}
          >
            <MaterialIcons
              name="email"
              size={25}
              color={this.state.borderColor == "email" ? "#FF0015" : "gray"}
            />
            {/* TextInput */}

            <TextInput
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
              placeholder="Email"
              style={[
                styles.textInput,
                {
                  borderColor:
                    this.state.borderColor == "email" ? "#FF0015" : "gray",
                },
              ]}
              onFocus={() => this.onFocus("email")}
            />
          </View>

          {/* /////////////////////////////////   Second Box //////////////////////////////////// */}

          <View style={styles.action}>
            <View
              style={[
                styles.section,
                {
                  borderColor:
                    this.state.borderColor == "password" ? "#FF0015" : "gray",
                },
              ]}
            >
              <MaterialIcons
                name="lock-outline"
                size={25}
                color={
                  this.state.borderColor == "password" ? "#FF0015" : "gray"
                }
              />
              {/* TextInput */}
              <TextInput
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                placeholder="Password"
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      this.state.borderColor == "password" ? "#FF0015" : "gray",
                  },
                ]}
                secureTextEntry
                onFocus={() => this.onFocus("password")}
              />
            </View>
          </View>
        </View>

        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.userSignup(this.state.email, this.state.password);
            // this.writeUserData(this.state.Name, this.state.Phone);
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.textLogin}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signup}>
          <Text style={[styles.textSignup, { color: "gray" }]}>
            Have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            <Text
              style={[
                styles.textSignup,
                {
                  color: "#FF0015",
                  marginLeft: 3,
                },
              ]}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    color: "#FF0015",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    fontFamily: "Montserrat-Regular",
    color: "gray",
  },
  section: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: "right",
    marginTop: 15,
    color: "#FF0015",
  },
  textLogin: {
    color: "white",
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
  },
  login: {
    width: "100%",
    height: 40,
    backgroundColor: "#FF0015",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    borderRadius: 15,
    elevation: 5,
  },

  signup: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  textSignup: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
});
