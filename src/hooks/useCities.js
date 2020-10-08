import useCitiesContext from "context/CitiesContext";
import { ACTION } from "reducers/citiesReducer";

export default function useCities() {
  const { state, dispatch } = useCitiesContext();
  const { cities, selectedCities } = state;

  return {
    cities,
    selectedCities,
    selectCities: (checked, id) =>
      dispatch({
        type: ACTION.UPDATE_CHECKED_CITY,
        payload: checked
          ? selectedCities.concat(cities.find((city) => city.id === id))
          : selectedCities.filter((city) => city.id !== id),
      }),
    selectAllCities: (checked) =>
      dispatch({
        type: ACTION.SELECT_ALL_CITIES,
        payload: checked ? cities.map((city) => city) : [],
      }),
  };
}
