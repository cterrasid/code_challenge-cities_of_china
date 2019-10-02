import React from 'react';
import PropTypes from 'prop-types';
import CityCard from '../CityCard';
import './styles.scss';

const Dataset = props => {
	const { cities, onSelectChange } = props;

	return (
		<section className="data__container">
			<ul className="data__city-list">
				{cities.map(city => {
					return (
						<li key={city.id}>
							<CityCard
								id={city.id}
								name={city.name}
								chineseName={city.chineseName}
								onSelectChange={onSelectChange}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Dataset.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	onSelectChange: PropTypes.func.isRequired,
};

export default Dataset;
