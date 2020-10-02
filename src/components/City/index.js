import React from "react";
import chinaIcon from "images/china-icon.png";
import "./styles.scss";
import useCities from "hooks/useCities";

export default function City({ id, name, chineseName }) {
  const { cities, selectedCities, selectCity, collectCities } = useCities();

  const handleChange = (e) => {
    const { id } = e.target;
    selectCity(cities, id);
    collectCities(cities);
  };
  console.log(selectedCities);
  return (
    <>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          value={id}
          name={name}
          onChange={handleChange}
        />
      </label>
      <div className="city__wrapper">
        <img className="city__logo" src={chinaIcon} alt="Imagen de muestra" />
        <div className="city__data-wrapper">
          <p className="city__name">{name}</p>
          <p className="city__chinese-name">{chineseName}</p>
        </div>
      </div>
    </>
  );
}
