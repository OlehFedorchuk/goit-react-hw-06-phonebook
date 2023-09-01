// import React from 'react';
// import { ContactItem } from './ContactItem/ContactItem';
// import { useSelector } from 'react-redux';

// export const ContactList = ({ onDeleteContact }) => {
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);

//   const filterContact = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//   );

//   const contactElem = filterContact.map(contact => (
//     <ContactItem
//       key={contact.id}
//       contact={contact}
//       onDeleteContact={onDeleteContact}
//     />
//   ));

//   return <div className='li'>{contactElem}</div>;
// };
import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/actions';

export const ContactList = ({ filter }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const contactElem = filterContact.map(contact => (
    <ContactItem
      key={contact.id}
      contact={contact}
      onDeleteContact={() => handleDeleteContact(contact.id)}
    />
  ));

  return <div className='li'>{contactElem}</div>;
};