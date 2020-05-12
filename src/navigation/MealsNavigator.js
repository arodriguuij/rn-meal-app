//import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: () =>
      Platform.OS === "IOS" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "IOS" ? "white" : Colors.primaryColor,
  headerTitleStyle: {
    fontWeight: "open-sans-bold",
  },
};

const MealsNavigator = createStackNavigator();
const MealsNavigatorScreen = () => (
  <MealsNavigator.Navigator>
    <MealsNavigator.Screen
      name="Categories"
      component={CategoriesScreen}
      options={({ route }) => {
        return {
          ...defaultStackNavOptions,
          headerTitle: route.params?.headerTitle,
          headerLeft: route.params?.headerLeft,
        };
      }}
    />
    <MealsNavigator.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => {
        return {
          ...defaultStackNavOptions,
          headerTitle: route.params.headerTitle,
        };
      }}
    />
    <MealsNavigator.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={({ route }) => {
        return {
          ...defaultStackNavOptions,
          headerTitle: route.params.headerTitle,
          headerRight: route.params.headerRight,
        };
      }}
    />
  </MealsNavigator.Navigator>
);

const MealFavNavigation = createStackNavigator();
const MealFavNavigatorScreen = () => (
  <MealFavNavigation.Navigator>
    <MealFavNavigation.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={({ route }) => {
        return {
          ...defaultStackNavOptions,
          headerTitle: route.params?.headerTitle,
          headerLeft: route.params?.headerLeft,
        };
      }}
    />
    <MealFavNavigation.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={defaultStackNavOptions}
    />
  </MealFavNavigation.Navigator>
);

const MealsFavTabNavigation = createBottomTabNavigator();
const MealsFavTabNavigationScreen = () => (
  <MealsFavTabNavigation.Navigator
    tabBarOptions={{
      activeTintColor: Colors.accentColor,
    }}
  >
    <MealsFavTabNavigation.Screen
      name="Meals"
      component={MealsNavigatorScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
        ),
      }}
    />
    <MealsFavTabNavigation.Screen
      name="Fav"
      component={MealFavNavigatorScreen}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={25} color={tabInfo.color} />
        ),
      }}
    />
  </MealsFavTabNavigation.Navigator>
);

const FiltersNavigation = createStackNavigator();
const FiltersNavigationScreen = () => (
  <FiltersNavigation.Navigator>
    <FiltersNavigation.Screen
      name="Filters"
      component={FiltersScreen}
      options={({ route }) => {
        return {
          ...defaultStackNavOptions,
          headerTitle: route.params?.headerTitle,
          headerLeft: route.params?.headerLeft,
          headerRight: route.params?.headerRight,
        };
      }}
    />
  </FiltersNavigation.Navigator>
);

const DrawerMainNavigation = createDrawerNavigator();
const DrawerMainNavigationScreen = () => (
  <DrawerMainNavigation.Navigator>
    <DrawerMainNavigation.Screen
      name="MealFavs"
      component={MealsFavTabNavigationScreen}
    />
    <DrawerMainNavigation.Screen
      name="Filters"
      component={FiltersNavigationScreen}
    />
  </DrawerMainNavigation.Navigator>
);

export default () => (
  <NavigationContainer>
    <DrawerMainNavigationScreen />
  </NavigationContainer>
);
