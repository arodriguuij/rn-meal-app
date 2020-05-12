import React, { useEffect, useCallback } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals.actions";

const getMealFromCategory = (route) => {
  const id = route.params.id;
  const meals = useSelector((state) => state.meals.meals);
  return meals.find((item) => item.id === id);
};

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    <Text>{children}</Text>
  </View>
);

const MealDetailScreen = ({ navigation, route }) => {
  const meal = getMealFromCategory(route);
  const headerTitle = meal.title;
  const mealId = route.params.id;

  const isCurrentMealFavorite = useSelector((state) =>
    state.meals.favoritesMeals.some((meal) => meal.id === mealId)
  );

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({
      headerTitle,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={isCurrentMealFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavoriteHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [headerTitle, toggleFavoriteHandler, isCurrentMealFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration} min</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredientes</Text>
      {meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
