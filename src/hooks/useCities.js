import useCitiesContext from "context/CitiesContext";
import { ACTION } from "reducers/citiesReducer";

export default function useCities() {
  const { state, dispatch } = useCitiesContext();
  const { cities, selectedCities } = state;

  return {
    cities,
    selectedCities,
    selectCity: (cities, id) =>
      dispatch({
        type: ACTION.UPDATE_CHECKED,
        payload: cities.map((city) =>
          city.id === id ? { ...city, isChecked: !city.isChecked } : city
        ),
      }),
    collectCities: (cities) =>
      dispatch({
        type: ACTION.COLLECT_CITIES,
        payload: cities.filter((city) =>
          city.isChecked ? [...selectedCities, city] : false
        ),
      }),
  };
}
