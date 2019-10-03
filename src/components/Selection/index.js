import React from 'react';
import PropTypes from 'prop-types';
import CityCard from '../CityCard';
import './styles.scss';

const Selection = props => {
  const { cityCollector } = props;

  return (
    <section className="selection__container">
      <ul className="data__city-list">
        {cityCollector.map(city => {
          return (
            <li key={city.id}>
              <CityCard name={city.name} chineseName={city.chineseName} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Selection.propTypes = {
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  // cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Selection;
