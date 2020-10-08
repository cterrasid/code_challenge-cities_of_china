import React, { createContext, useContext, useReducer, useMemo } from "react";
import data from "data/cities-of-china.json";
import citiesReducer from "reducers/citiesReducer";

const CitiesContext = createContext({});

const initialState = {
  // cities: data.cities.map((city) => Object.assign(city, { isChecked: false })),
  cities: data.cities,
  selectedCity: {},
  selectedCities: [],
};

export function CitiesContextProvider({ children }) {
  const [state, dispatch] = useReducer(citiesReducer, initialState);

  const values = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <CitiesContext.Provider value={values}>{children}</CitiesContext.Provider>
  );
}

export default function useCitiesContext() {
  const context = useContext(CitiesContext);

  return context;
}
