import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const contactElem = filterContact.map(contact => (
    <ContactItem
      key={contact.id}
      contact={contact}
      onDeleteContact={onDeleteContact}
    />
  ));

  return <div className='li'>{contactElem}</div>;
};