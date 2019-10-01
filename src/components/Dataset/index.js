import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Dataset = props => {
	const { data } = props;
	return (
		<section className="data__container">
			<ul className="data__city-list">
				{data.map(city => {
					return (
						<li key={city.id}>
							{/*CARD */}
							<label htmlFor="select-city">
								<input id="select-city" type="checkbox" value="select-city" name={city.name} />
							</label>
							<img className="city__logo" src="/" alt="Imagen de muestra" />
							<div className="city__data-wrapper">
								<p className="city__name">{city.name}</p>
								<p className="city__chinese-name">{city.chineseName}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Dataset.propTypes = {
	data: PropTypes.objectOf(PropTypes.strings),
};

export default Dataset;
