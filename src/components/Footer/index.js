import React from 'react';
import PropTypes from 'prop-types';
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

Footer.propTypes = {
  copy: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
};

export default Footer;
