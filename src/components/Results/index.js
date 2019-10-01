import React from 'react';
import './styles.scss';

const Results = () => {
	return (
		<section className="results__container">
			<p className="results__counter">x items selected</p>
			<button className="results__clear" type="button">
				Clear
			</button>
		</section>
	);
};

export default Results;
