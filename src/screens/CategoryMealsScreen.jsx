import React, { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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
  const selectedCategory = getSelectedCategory(route);
  const headerTitle = selectedCategory.title;

  useEffect(() => {
    navigation.setParams({
      headerTitle,
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

export default CategoryMealsScreen;
