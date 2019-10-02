import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = props => {
  const { title } = props;

  return (
    <header className="header__container">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
