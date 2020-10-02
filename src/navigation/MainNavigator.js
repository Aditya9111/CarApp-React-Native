import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import { View, Platform } from "react-native";
import * as firebase from "firebase";

import LogIn from "../screens/AuthScreens/LoginComponent";
import SignUp from "../screens/AuthScreens/SignupComponent";
import OnBoarding from "../OnBoarding";
import LoadingScreen from "../screens/AuthScreens/LoadingScreen";
import HomeScreen from "../screens/AuthScreens/HomeScreen";

import Profile from "../screens/AppScreens/ProfileScreen";
import Order from "../screens/AppScreens/OrderScreen";
import Locations from "../screens/AppScreens/LocationScreen";
import Icon from "react-native-vector-icons/Ionicons";

import { firebaseConfig } from "../../config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const navigator = createStackNavigator(
  {
    OnBoarding: OnBoarding,
    SignIn: LogIn,
    SignUp: SignUp,
  },
  {
    initialRouteName: "OnBoarding",
    headerMode: "none",
  }
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const ProfileStack = createStackNavigator({
  Profile: Profile,
});

const OrderStack = createStackNavigator({
  Order: Order,
});

const LocationStack = createStackNavigator({
  Locations: Locations,
});

const tabBarConfig = {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: "Home",
      tabBarIcon: (tabInfo) => {
        return <Icon name="ios-home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "white",
    },
  },

  Locations: {
    screen: LocationStack,
    navigationOptions: {
      title: "Addresses",
      tabBarIcon: (tabInfo) => {
        return <Icon name="ios-pin" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "white",
    },
  },

  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Icon name="ios-person" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "white",
    },
  },

  Order: {
    screen: OrderStack,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Icon name="ios-cart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "white",
    },
  },
};

const AppTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabBarConfig, {
        inactiveColor: "grey",
        activeColor: "#FF0015",
        shifting: true,
      })
    : createBottomTabNavigator(tabBarConfig, {
        tabBarOptions: {
          activeTintColor: "#ff0015",
        },
      });

const SwitchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppTabNavigator,
  stack: navigator,
});

export default createAppContainer(SwitchNavigator);
