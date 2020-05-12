import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const getMealFromCategory = (route) => {
  const id = route.params?.id;
  return MEALS.find((item) => item.id === id);
};

const MealDetailScreen = ({ navigation, route }) => {
  const meal = getMealFromCategory(route);
  const headerTitle = meal.title;

  useEffect(() => {
    navigation.setParams({
      headerTitle,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("Mark as favorite!");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [headerTitle]);

  return (
    <MealItem
      item={meal}
      onSelectMeal={() => {
        console.log("I dunno what I suppose to do :|");
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
