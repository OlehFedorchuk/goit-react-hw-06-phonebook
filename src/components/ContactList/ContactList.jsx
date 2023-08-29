import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteContact, filter }) => {

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const contactElem = filterContact.map(contact => <ContactItem
    key={contact.id}
    contact={contact}
    onDeleteContact={onDeleteContact}
  />);
  
  return (
    <div className='li'>
      {contactElem}
    </div>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
