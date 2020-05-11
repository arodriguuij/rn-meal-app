import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTitle item={item} navigation={navigation} />
      )}
    />
  );
};

const style = StyleSheet.create({});

export default CategoriesScreen;
