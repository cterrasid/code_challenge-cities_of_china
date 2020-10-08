import React from "react";
import useCities from "hooks/useCities";
import "./styles.scss";

export default function Filters() {
  const {
    selectAllCities,
    filterCitiesByName,
    filteredCities,
    selectedCities,
  } = useCities();

  const onChangeCheckbox = (e) => {
    const { checked } = e.target;
    selectAllCities(checked);
  };

  const handleChangeValue = (e) => {
    const { value } = e.target;
    filterCitiesByName(value);
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
          onChange={handleChangeValue}
        />
      </label>
      <label className="filter__select" htmlFor="select-all" title="Select all">
        <input
          type="checkbox"
          id="select-all"
          value="filter__select-all"
          onChange={onChangeCheckbox}
          checked={selectedCities.length === filteredCities.length}
        />
        Select All
      </label>
    </form>
  );
}
