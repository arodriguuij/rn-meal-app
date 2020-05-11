import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

const MealList = ({ listData, navigation }) => (
  <View style={styles.list}>
    <FlatList
      style={{ width: "100%" }}
      data={listData}
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default MealList;
