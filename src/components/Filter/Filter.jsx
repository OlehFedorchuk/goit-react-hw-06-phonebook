import React from 'react';
import { useDispatch } from 'react-redux'; 
import PropTypes from 'prop-types';
import { updateFilter } from '../../store'; 
const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <label>
      Filter contacts by name:
      <input type="text" value={value} onChange={(e) => dispatch(updateFilter(e.target.value))} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;