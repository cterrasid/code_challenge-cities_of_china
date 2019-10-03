import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import Selection from '../Selection';
import './styles.scss';

const ResultData = props => {
  const { cityCollector, cities } = props;

  return (
    <section className="result-data__container">
      <Counter />
      <Selection cityCollector={cityCollector} cities={cities} />
    </section>
  );
};

ResultData.propTypes = {
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
  cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ResultData;
