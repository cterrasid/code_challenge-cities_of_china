import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Checkbox = props => {
  const { id, name, onChange, title, checked } = props;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        value={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      {title}
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Checkbox;
