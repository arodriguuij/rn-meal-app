import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const getSelectedCategory = (navigation) => {
  const id = getIdFromNavigationParam(navigation);
  return CATEGORIES.find((category) => category.id === id);
};
const getMealsFromCategory = (route) => {
  const id = getIdFromNavigationParam(route);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  return availableMeals.filter((meal) => meal.categoryIds.indexOf(id) >= 0);
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

  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals founds, maybe check your filters?</Text>
      </View>
    );
  }
  return <MealList listData={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
