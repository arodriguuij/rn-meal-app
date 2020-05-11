import React from "react";
import { StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const getSelectCategory = (navigation) => {
  const id = navigation.getParam("categoryId");
  return CATEGORIES.find((category) => category.id === id);
};
const getMealsFromCategory = (navigation) => {
  const id = navigation.getParam("categoryId");
  return MEALS.filter((meal) => meal.categoryIds.indexOf(id) >= 0);
};

const CategoryMealsScreen = ({ navigation }) => {
  const meals = getMealsFromCategory(navigation);

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelectMeal={() =>
              navigation.navigate("MealDetail", { id: item.id })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
});

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = getSelectCategory(navigation);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
