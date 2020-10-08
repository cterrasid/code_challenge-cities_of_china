import useCitiesContext from "context/CitiesContext";
import { ACTION } from "reducers/citiesReducer";

export default function useCities() {
  const { state, dispatch } = useCitiesContext();
  const { cities, selectedCities, filteredCities, counter } = state;

  return {
    selectedCities,
    filteredCities,
    counter,
    selectCities: (checked, id) =>
      dispatch({
        type: ACTION.UPDATE_CHECKED_CITY,
        payload: checked
          ? selectedCities.concat(filteredCities.find((city) => city.id === id))
          : selectedCities.filter((city) => city.id !== id),
      }),
    selectAllCities: (checked) =>
      dispatch({
        type: ACTION.SELECT_ALL_CITIES,
        payload: checked ? filteredCities.map((city) => city) : [],
      }),
    countSelectedCities: () =>
      dispatch({
        type: ACTION.COUNT_SELECTED_CITIES,
        payload: selectedCities.length,
      }),
    filterCitiesByName: (value) =>
      dispatch({
        type: ACTION.FILTER_CITIES_BY_NAME,
        payload: cities.filter((city) =>
          city.name.toLowerCase().includes(value.toLowerCase())
        ),
      }),
    clearSelectedCity: (id) =>
      dispatch({
        type: ACTION.CLEAR_CITY,
        payload: selectedCities.filter((city) => city.id !== id),
      }),
    clearAllSelectedCities: () =>
      dispatch({
        type: ACTION.CLEAR_ALL_CITIES,
        payload: [],
      }),
  };
}
