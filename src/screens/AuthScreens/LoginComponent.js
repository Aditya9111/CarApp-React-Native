import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Keyboard,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as firebase from "firebase";

export default class LogIn extends React.Component {
  static navigationOptions = { title: "Log In", headerTintColor: "#FF0015" };

  constructor(props) {
    super(props);
    this.state = {
      borderColor: null,
      email: "",
      password: "",
    };
  }

  onFocus(value) {
    this.setState({
      borderColor: value,
    });
  }

  forgotPassword = (Email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(function () {
        alert("Please check your email ");
      })
      .catch(function (e) {
        alert("Please enter email id");
      });
  };

  userSignin(email, pass) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
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
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Login with Email and Password</Text>
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

        <TouchableOpacity onPress={() => this.forgotPassword(this.state.email)}>
          <View>
            <Text style={styles.forgot}>Forgot Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.userSignin(this.state.email, this.state.password);
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signup}>
          <Text
            style={[
              styles.textSignup,
              { color: "gray", fontFamily: "Montserrat-Regular" },
            ]}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
          >
            <Text
              style={[
                styles.textSignup,
                {
                  color: "#FF0015",
                  marginLeft: 3,
                  fontFamily: "Montserrat-Regular",
                },
              ]}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              Sign Up
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
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    marginTop: 15,
    color: "#FF0015",
  },
  textLogin: {
    fontFamily: "Montserrat-SemiBold",
    color: "white",
    fontSize: 15,
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
    textAlign: "center",
  },
});
