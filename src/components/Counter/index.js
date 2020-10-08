import React from "react";
import useCities from "hooks/useCities";
import useCounter from "hooks/useCounter";
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
      <button
        className="counter__clear-button"
        type="button"
        onClick={handleCloseAll}
      >
        Clear
      </button>
    </section>
  );
}
