import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import Dataset from '../Dataset';
import './styles.scss';

const QueryData = props => {
  const { filterByName, queryName, onSelectAllChange, cities, onSelectChange, cityCollector } = props;

  return (
    <section className="query-data__container">
        <Filters
          onSelectAllChange={onSelectAllChange}
          filterByName={filterByName}
          queryName={queryName}
        />
        <Dataset
          cities={cities}
          onSelectChange={onSelectChange}
          cityCollector={cityCollector}
          queryName={queryName}
        />
    </section>
  );
};

QueryData.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default QueryData;
