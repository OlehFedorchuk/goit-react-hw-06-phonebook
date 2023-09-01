
import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
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