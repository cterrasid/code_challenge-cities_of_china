import React from 'react';
import './styles.scss';

const Filters = () => {
	return (
		<form className="filter__container">
			<label className="filter-name__label" htmlFor="filter-name" title="Search by name">
				<input className="filter__name-input" id="filter-name" type="text" placeholder="Search by name" />
			</label>
			<label className="filter__select" htmlFor="select-all" title="Select all">
				<input type="checkbox" id="select-all" value="filter__select-all" />
				Select All
			</label>
		</form>
	);
};

export default Filters;
