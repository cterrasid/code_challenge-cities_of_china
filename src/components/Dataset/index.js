import React from 'react';
import PropTypes from 'prop-types';
import CityCard from '../CityCard';
import './styles.scss';

const Dataset = props => {
  const { cities, onSelectChange, cityCollector, queryName } = props;

  return (
    <section className="data__container">
      <ul className="data__city-list">
        {cities
          .filter(city =>
            city.id.toLowerCase().includes(queryName.toLowerCase()),
          )
          .map(city => {
            return (
              <li key={city.id}>
                <CityCard
                  id={city.id}
                  name={city.name}
                  chineseName={city.chineseName}
                  onSelectChange={onSelectChange}
                  cityCollector={cityCollector}
                />
              </li>
            );
          })
          .sort((a, b) => a - b)}
      </ul>
    </section>
  );
};

Dataset.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default Dataset;
