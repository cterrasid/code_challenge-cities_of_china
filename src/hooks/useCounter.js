import { useEffect } from "react";
import useCities from "./useCities";

export default function useCounter() {
  const { countSelectedCities, selectedCities, counter } = useCities();

  useEffect(() => {
    countSelectedCities();
  }, [selectedCities]);

  return counter;
}
