import React from "react";
import City from "components/City";
import "./styles.scss";
import useCities from "hooks/useCities";

export default function ListOfCities() {
  const { cities } = useCities();

  return (
    <section className="data__container">
      <ul className="data__city-list">
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <City city={city} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
