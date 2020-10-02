import React from "react";
import { View, Text } from "react-native";
// import { enableScreens } from "react-native-screens";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";

import SwitchNavigator from "./src/navigation/MainNavigator";
// import MealReducer from "./redux/store/reducers/meal";

// enableScreens();

// const rootReducer = combineReducers({
//   meals: MealReducer,
// });

// const store = createStore(rootReducer);

const App = () => {
  return <SwitchNavigator />;
};

export default App;
