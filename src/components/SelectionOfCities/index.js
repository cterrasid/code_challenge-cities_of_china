import City from "components/City";
import useCities from "hooks/useCities";
import React from "react";
import "./styles.scss";

export default function SelectionOfCities() {
  const { selectedCities, selectCities } = useCities();

  return (
    <section className="selection__container">
      <ul className="data__city-list">
        {selectedCities.map((city) => {
          return (
            <li key={city.id}>
              <City city={city} withClose />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
