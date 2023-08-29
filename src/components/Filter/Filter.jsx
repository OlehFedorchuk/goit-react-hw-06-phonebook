import PropTypes from 'prop-types';
import { useState } from 'react';

export const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterForm = e => {
    const value = e.target.value;
    setFilter(value)
  }
  
  onFilter(filter)

    return (
      <label>
        Find contacts by name
        <input type="text" onChange={handleFilterForm} value={filter} />
      </label>
    );
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };