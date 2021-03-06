export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return {
    type: "TOGGLE_FAVORITE",
    payload: {
      mealId: id,
    },
  };
};

export const setFilters = (filterSettingd) => {
  return {
    type: "SET_FILTERS",
    payload: {
      filters: filterSettingd,
    },
  };
};
