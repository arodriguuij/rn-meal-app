import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FilterScreen = ({ navigation }) => {
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
    });
  }, []);

  return (
    <View>
      <Text>Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilterScreen;
