import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  const [localName, setLocalName] = useState(name); 
  const [localNumber, setLocalNumber] = useState(number); 

  const handleLocalChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setLocalName(value);
    } else if (name === 'number') {
      setLocalNumber(value);
    }
    handleChange(e); 
  };

  const handleLocalSubmit = (e) => {
    handleSubmit(e); 
    setLocalName(''); 
    setLocalNumber('');
  };

  return (
    <form onSubmit={handleLocalSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={localName}
          onChange={handleLocalChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={localNumber}
          onChange={handleLocalChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;