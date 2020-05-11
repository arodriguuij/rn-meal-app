import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const getSelectedCategory = (navigation) => {
  const id = getIdFromNavigationParam(navigation);
  return CATEGORIES.find((category) => category.id === id);
};
const getMealsFromCategory = (route) => {
  const id = getIdFromNavigationParam(route);
  return MEALS.filter((meal) => meal.categoryIds.indexOf(id) >= 0);
};
const getIdFromNavigationParam = (route) => {
  return route.params?.id;
};

const CategoryMealsScreen = ({ navigation, route }) => {
  const meals = getMealsFromCategory(route);
  return <MealList listData={meals} navigation={navigation}/>;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = getSelectedCategory(navigation);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
