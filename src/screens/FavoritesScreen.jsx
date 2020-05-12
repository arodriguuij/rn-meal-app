import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const getFavMeals = ({ navigation, route }) => {
  //const id = getIdFromNavigationParam(navigation);
  return MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
};

const getIdFromNavigationParam = (route) => route.params?.id;

const FavoritesScreen = ({ navigation, route }) => {
  const meals = getFavMeals(route);

  useEffect(() => {
    navigation.setParams({
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            tutle="Menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return <MealList listData={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
