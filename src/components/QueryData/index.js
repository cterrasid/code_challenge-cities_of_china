import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import Dataset from '../Dataset';
import './styles.scss';

const QueryData = props => {
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
    <section className="query-data__container">
      <Filters
        onSelectAllChange={onSelectAllChange}
        filterByName={filterByName}
        filteredCities={filteredCities}
        getFilteredCities={getFilteredCities}
      />
      <Dataset
        cities={cities}
        onSelectChange={onSelectChange}
        cityCollector={cityCollector}
        filteredCities={filteredCities}
        getFilteredCities={getFilteredCities}
      />
    </section>
  );
};

QueryData.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  filteredCities: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFilteredCities: PropTypes.func.isRequired,
};

export default QueryData;
