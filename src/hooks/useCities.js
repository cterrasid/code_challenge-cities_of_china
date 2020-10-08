import useCitiesContext from "context/CitiesContext";
import { ACTION } from "reducers/citiesReducer";

export default function useCities() {
  const { state, dispatch } = useCitiesContext();
  const { cities, selectedCity, selectedCities } = state;

  return {
    cities,
    selectedCity,
    selectedCities,
    selectCities: (checked, id) =>
      dispatch({
        type: ACTION.UPDATE_CHECKED,
        payload: checked
          ? selectedCities.concat(cities.find((city) => city.id === id))
          : selectedCities.filter((city) => city.id !== id),
      }),
    selectAllCities: () =>
      dispatch({
        type: ACTION.SELECT_ALL_CITIES,
        payload: selectedCities.includes(cities.forEach((city) => city)),
      }),
  };
}
