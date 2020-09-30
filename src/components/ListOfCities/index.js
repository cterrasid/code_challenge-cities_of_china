import React from "react";
import data from "data/cities-of-china.json";
import City from "components/City";
import "./styles.scss";

export default function ListOfCities() {
  const { cities } = data;

  return (
    <section className="data__container">
      <ul className="data__city-list">
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <City
                id={city.id}
                name={city.name}
                chineseName={city.chineseName}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
