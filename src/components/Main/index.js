import React from "react";
import Filters from "components/Filters";
import ListOfCities from "components/ListOfCities";
import Counter from "components/Counter";
import SelectionOfCities from "components/SelectionOfCities";
import "./styles.scss";

export default function Main() {
  return (
    <main className="main__container">
      <section className="query-data__container">
        <Filters />
        <ListOfCities />
      </section>
      <section className="result-data__container">
        <Counter />
        <SelectionOfCities />
      </section>
    </main>
  );
}
