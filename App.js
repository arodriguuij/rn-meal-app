import React from "react";
import MealsNavigator from "./src/navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./src/store/reducers/meals.reducer";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({ meals: mealsReducer });
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MealsNavigator />
  </Provider>
);

export default App;
