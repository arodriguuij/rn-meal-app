import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals.actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

const mealReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_FILTERS:
      const appliedFilters = actions.payload.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        } else if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        } else if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        } else if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        } else {
          return true;
        }
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesMeals.findIndex(
        (meal) => meal.id === actions.payload.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoritesMeals];
        updateFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoritesMeals: updateFavMeals,
        };
      } else {
        const meal = state.meals.find((meal) => {
          return meal.id === actions.payload.mealId;
        });
        return {
          ...state,
          favoritesMeals: [...state.favoritesMeals.concat(meal)],
        };
      }
    default:
      return state;
  }
};

export default mealReducer;
