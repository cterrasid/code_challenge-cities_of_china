import React from 'react';
import './styles.scss';

const Header = props => {
	const { title } = props;

	return (
		<header className="header__container">
			<h1 className="header__title">{title}</h1>
		</header>
	);
};

export default Header;
