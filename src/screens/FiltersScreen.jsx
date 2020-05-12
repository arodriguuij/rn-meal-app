import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Switch } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals.actions";

const FilterSwitch = ({ label, state, onChange }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={state}
      onValueChange={onChange}
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Colors.primaryColor}
    />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vega: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({
      headerTitle: "Filter Meals",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            tutle="Menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            tutle="Menu"
            iconName="ios-save"
            onPress={() => saveFilters()}
          />
        </HeaderButtons>
      ),
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avialable Filters / Restuctions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} onChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FilterScreen;
