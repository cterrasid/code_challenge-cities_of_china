import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import CityCard from '../CityCard';
import './styles.scss';

const Dataset = props => {
  const { getFilteredCities, onSelectChange, cityCollector } = props;

  return (
    <section className="data__container">
      <ul className="data__city-list">
        {getFilteredCities().map(city => {
          return (
            <li key={city.id}>
              <Checkbox
                id={city.id}
                name={city.name}
                onChange={onSelectChange}
                title=""
                checked={cityCollector.includes(city.id)}
              />
              <CityCard
                id={city.id}
                name={city.name}
                chineseName={city.chineseName}
                onSelectChange={onSelectChange}
                cityCollector={cityCollector}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Dataset.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  getFilteredCities: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dataset;
