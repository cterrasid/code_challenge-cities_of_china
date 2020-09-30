import React, { useReducer, useState } from "react";
import chinaIcon from "images/china-icon.png";
import "./styles.scss";

export default function City({ id, name, chineseName }) {
  //actions
  const ACTION = {
    SET_CITIES: "set_cities",
    SELECT_CITY: "select_one_city",
    SELECT_ALL_CITIES: "select_all_cities",
  }

  // creo el reducer
  const citiesReducer = (state, action) => {
    switch (action.type) {
      case ACTION.SET_CITIES:
        return {cities: [...state.cities, action.payload], isChecked: false}
        case ACTION.SELECT_ALL_CITIES
    
      default:
        break;
    }
  }

  const initialState = {
    cities: [],
    isChecked: false
  }



  const [state, dispatch] = useReducer()
  const [isChecked, setIsChecked] = useState(false);
  const [citiesSelected, setCitiesSelected] = useState([]);

  const handleChecked = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target.value);
    console.log({ isChecked });
    console.log({ citiesSelected });
  };

  return (
    <>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          value={id}
          name={name}
          checked={isChecked}
          onChange={handleChecked}
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
