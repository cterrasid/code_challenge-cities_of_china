import React from "react";
import useCities from "hooks/useCities";
import "./styles.scss";

export default function Counter() {
  const { clearAllSelectedCities } = useCities();

  const handleCloseAll = () => {
    clearAllSelectedCities();
  };

  return (
    <section className="counter__container">
      <p className="counter__counter">x items selected</p>
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
