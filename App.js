import React from "react";
import { LogBox } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import SwitchNavigator from "./src/navigation/MainNavigator";
import ProdReducer from "./redux/store/reducers/prodReducer";

enableScreens();

const rootReducer = combineReducers({
  products: ProdReducer,
});

const store = createStore(rootReducer);

const App = () => {
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested",
    "Deprecation in ",
  ]);

  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
