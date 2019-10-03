import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Checkbox = props => {
  const { id, name, onSelectChange, cityCollector } = props;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        value={id}
        name={name}
        onChange={onSelectChange}
        checked={cityCollector.includes(id)}
      />
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  cityCollector: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Checkbox;
