import React from "react";
import Filters from "components/Filters";
import ListOfCities from "components/ListOfCities";
import Counter from "components/Counter";
import Selection from "components/Selection";
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
        <Selection />
      </section>
    </main>
  );
}
