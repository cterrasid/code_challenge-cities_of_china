import React from 'react';
import Counter from '../Counter';
import Selection from '../Selection';
import './styles.scss';

const ResultData = () => {
  return (
    <section className="result-data__container">
      <Counter />
      <Selection />
    </section>
  );
};

export default ResultData;
