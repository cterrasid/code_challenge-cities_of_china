export const ACTION = {
  FILTER_CITIES_BY_NAME: "filter_cities",
  UPDATE_CHECKED_CITY: "select/deselect_city",
  SELECT_ALL_CITIES: "select/deselect_all_cities",
};

export default function citiesReducer(state, action) {
  switch (action.type) {
    case ACTION.FILTER_CITIES_BY_NAME:
      return {
        ...state,
        filteredCities: action.payload,
      };
    case ACTION.UPDATE_CHECKED_CITY:
      return {
        ...state,
        selectedCities: action.payload,
      };
    case ACTION.SELECT_ALL_CITIES:
      return {
        ...state,
        selectedCities: action.payload,
      };
    default:
      throw new Error(`Action ${action.type} is not working!`);
  }
}
