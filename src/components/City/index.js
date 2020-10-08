import React from "react";
import chinaIcon from "images/china-icon.png";
import useCities from "hooks/useCities";
import "./styles.scss";

export default function City({ city }) {
  const { id, name, chineseName } = city;
  const { selectedCities, selectCities } = useCities();

  const handleChange = (e) => {
    const { id, checked } = e.target;
    selectCities(checked, id);
  };

  return (
    <>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          value={id}
          name="cities"
          onChange={handleChange}
          checked={selectedCities.includes(city)}
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
