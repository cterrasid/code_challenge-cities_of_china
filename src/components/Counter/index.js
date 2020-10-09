import React from "react";
import useCities from "hooks/useCities";
import useCounter from "hooks/useCounter";
import Button from "components/Button";
import "./styles.scss";

export default function Counter() {
  const { clearAllSelectedCities } = useCities();
  const counter = useCounter();

  const handleCloseAll = () => {
    clearAllSelectedCities();
  };

  return (
    <section className="counter__container">
      <p className="counter__counter">{counter} items selected</p>
      <Button click={handleCloseAll}>Clear all</Button>
    </section>
  );
}
