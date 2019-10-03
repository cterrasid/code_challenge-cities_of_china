import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import chinaIcon from '../../images/china-icon.png';
import './styles.scss';

const CityCard = props => {
  const { name, chineseName } = props;

  return (
    <Fragment>
      <div className="city__wrapper">
        <img className="city__logo" src={chinaIcon} alt="Imagen de muestra" />
        <div className="city__data-wrapper">
          <p className="city__name">{name}</p>
          <p className="city__chinese-name">{chineseName}</p>
        </div>
      </div>
    </Fragment>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  chineseName: PropTypes.string.isRequired,
};

export default CityCard;
