import React from 'react';
import PropTypes from 'prop-types';
import QueryData from '../QueryData';
import ResultData from '../ResultData';
import './styles.scss';

const Main = props => {
  const {
    onSelectAllChange,
    filterByName,
    filteredCities,
    getFilteredCities,
    cities,
    onSelectChange,
    cityCollector,
  } = props;

  return (
    <main className="main__container">
      <QueryData
        onSelectAllChange={onSelectAllChange}
        filterByName={filterByName}
        filteredCities={filteredCities}
        getFilteredCities={getFilteredCities}
        cities={cities}
        onSelectChange={onSelectChange}
        cityCollector={cityCollector}
      />
      <ResultData cityCollector={cityCollector} cities={cities} />
    </main>
  );
};

Main.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  filteredCities: PropTypes.string.isRequired,
  getFilteredCities: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;
