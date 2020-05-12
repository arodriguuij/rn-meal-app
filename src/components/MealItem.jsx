import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import DefaultText from "../components/DefaultText";

const MealItem = ({
  item: { duration, title, complexity, affordability, imageUrl },
  onSelectMeal,
}) => (
  <View style={styles.mealItem}>
    <TouchableOpacity onPress={onSelectMeal}>
      <>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{duration} min</DefaultText>
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    backgroundColor: "#fafafa",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    height: "10%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
