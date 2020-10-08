import useCitiesContext from "context/CitiesContext";
import { ACTION } from "reducers/citiesReducer";

export default function useCities() {
  const { state, dispatch } = useCitiesContext();
  const { cities, selectedCities, filteredCities } = state;

  return {
    cities,
    selectedCities,
    filteredCities,
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
    filterCitiesByName: (value) =>
      dispatch({
        type: ACTION.FILTER_CITIES_BY_NAME,
        payload: cities.filter((city) =>
          city.name.toLowerCase().includes(value.toLowerCase())
        ),
      }),
  };
}
