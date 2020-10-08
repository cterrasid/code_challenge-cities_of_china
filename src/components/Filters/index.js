import React from "react";
import useCities from "hooks/useCities";
import "./styles.scss";

export default function Filters() {
  const { selectAllCities, cities, selectedCities } = useCities();

  const handleChange = (e) => {
    const { checked } = e.target;

    selectAllCities(checked);
  };

  return (
    <form className="filter__container">
      <label
        className="filter-name__label"
        htmlFor="filter-name"
        title="Search by name"
      >
        <input
          className="filter__name-input"
          id="filter-name"
          type="text"
          placeholder="Search by name"
        />
      </label>
      <label className="filter__select" htmlFor="select-all" title="Select all">
        <input
          type="checkbox"
          id="select-all"
          value="filter__select-all"
          onChange={handleChange}
          checked={selectedCities.length === cities.length}
        />
        Select All
      </label>
    </form>
  );
}
