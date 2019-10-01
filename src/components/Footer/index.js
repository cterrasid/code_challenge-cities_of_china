import React from 'react';
import './styles.scss';

const Footer = props => {
	const { copy, by } = props;

	return (
		<footer className="footer__container">
			<em>
				<strong>{by}</strong>
				<small>{copy}</small>
			</em>
		</footer>
	);
};

export default Footer;
