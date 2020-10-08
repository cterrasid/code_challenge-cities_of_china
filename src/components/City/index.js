import React from "react";
import chinaIcon from "images/china-icon.png";
import useCities from "hooks/useCities";
import "./styles.scss";

export default function City({ city, withClose = false }) {
  const { id, name, chineseName } = city;
  const { selectedCities, selectCities, clearSelectedCity } = useCities();

  const handleChange = (e) => {
    const { id, checked } = e.target;
    selectCities(checked, id);
  };

  const onClickClose = (e) => {
    const { id } = e.target;
    clearSelectedCity(id);
  };

  return (
    <>
      {!withClose && (
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
      )}
      <div className="city__wrapper">
        <img className="city__logo" src={chinaIcon} alt="Imagen de muestra" />
        <div className="city__data-wrapper">
          <p className="city__name">{name}</p>
          <p className="city__chinese-name">{chineseName}</p>
        </div>
        {withClose && (
          <button className="city__close" id={id} onClick={onClickClose}>
            X
          </button>
        )}
      </div>
    </>
  );
}
