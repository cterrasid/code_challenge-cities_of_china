import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import chinaIcon from '../../images/china-icon.png';
import './styles.scss';

const CityCard = props => {
	const { id, name, chineseName, onSelectChange } = props;

	return (
		<Fragment>
			<label htmlFor={id}>
				<input id={id} type="checkbox" value={id} name={name} onChange={onSelectChange} />
			</label>
			<div className="city__wrapper">
				<img className="city__logo" src={chinaIcon} alt="Imagen de muestra" />
				<div className="city__data-wrapper">
					<p className="city__name">{name}</p>
					<p className="city__chinese-name">{chineseName}</p>
				</div>
			</div>
		</Fragment>
	);
};

CityCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	chineseName: PropTypes.string.isRequired,
	onSelectChange: PropTypes.func.isRequired,
	//city: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CityCard;
