import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTitle = ({
  item: { id, title, color },
  navigation
}) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("CategoryMeals", { id: id })}
      >
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform === "Android" && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    textAlign: "right",
  },
});
export default CategoryGridTitle;
