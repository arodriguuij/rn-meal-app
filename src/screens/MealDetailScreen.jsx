import React from "react";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const getMealFromCategory = (navigation) => {
  const id = navigation.getParam("id");
  return MEALS.find((item) => item.id === id);
};

const MealDetailScreen = ({ navigation }) => {
  const meal = getMealFromCategory(navigation);
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

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const meal = getMealFromCategory(navigation);
  return {
    headerTitle: meal.title,
    headerRight: (
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
  };
};

export default MealDetailScreen;
