export const ACTION = {
  UPDATE_CHECKED: "select/deselect_city",
  COLLECT_CITIES: "collect_cities",
  SELECT_ALL_CITIES: "select_all_cities",
};

export default function citiesReducer(state, action) {
  switch (action.type) {
    case ACTION.UPDATE_CHECKED:
      return {
        ...state,
        cities: action.payload,
      };
    case ACTION.COLLECT_CITIES:
      return {
        ...state,
        selectedCities: action.payload,
      };

    default:
      throw new Error(`Action ${action.type} is not working!`);
  }
}
