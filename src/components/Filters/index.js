import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = props => {
  const { filterByName, queryName, onSelectAllChange } = props;

  return (
    <form className="filter__container">
      <label
        className="filter-name__label"
        htmlFor="filter-name"
        title="Search by name"
      >
        <input
          className="filter__name-input"
          id="filter-name"
          type="text"
          placeholder="Search by name"
          onKeyUp={filterByName}
          queryName={queryName}
        />
      </label>
      <label className="filter__select" htmlFor="select-all" title="Select all">
        <input
          type="checkbox"
          id="select-all"
          value="filter__select-all"
          onChange={onSelectAllChange}
        />
        Select All
      </label>
    </form>
  );
};

Filters.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
  queryName: PropTypes.string.isRequired,
};

export default Filters;
