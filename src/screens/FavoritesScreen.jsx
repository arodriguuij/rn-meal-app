import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoritesMeals);

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

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No Favotires meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
