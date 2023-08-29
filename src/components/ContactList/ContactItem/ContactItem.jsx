import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <div className='div'>
      <span>{contact.name}</span>
      <span> {contact.number}</span>
      <button className='btnDelete' onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};


ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};