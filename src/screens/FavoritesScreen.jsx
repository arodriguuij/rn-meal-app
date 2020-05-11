import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const getFavMeals = (route) => {
  //const id = getIdFromNavigationParam(navigation);
  return MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
};
const getIdFromNavigationParam = (route) => route.params?.id;

const FavoritesScreen = ({ navigation, route }) => {
  const meals = getFavMeals(route);
  return <MealList listData={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
