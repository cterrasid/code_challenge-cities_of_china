import React from 'react';
import PropTypes from 'prop-types';
import QueryData from '../QueryData';
import ResultData from '../ResultData';
import './styles.scss';

const Main = props => {
  const {
    filterByName,
    queryName,
    onSelectAllChange,
    cities,
    onSelectChange,
    cityCollector,
  } = props;

  return (
    <main className="main__container">
      <QueryData
        onSelectAllChange={onSelectAllChange}
        filterByName={filterByName}
        cities={cities}
        onSelectChange={onSelectChange}
        cityCollector={cityCollector}
        queryName={queryName}
      />
      <ResultData />
    </main>
  );
};

Main.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default Main;
