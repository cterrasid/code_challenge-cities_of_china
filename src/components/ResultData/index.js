import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import Selection from '../Selection';
import './styles.scss';

const ResultData = props => {
  const { cityCollector } = props;

  return (
    <section className="result-data__container">
      <Counter />
      <Selection cityCollector={cityCollector} />
    </section>
  );
};

ResultData.propTypes = {
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResultData;
