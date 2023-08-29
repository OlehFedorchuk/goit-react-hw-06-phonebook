import { useEffect } from 'react';

import { ContactForm } from './Form/form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { addContacts, deleteContacts, filterAction } from 'redux/actions';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleAddContact = contact => {
    const { name, id, number } = contact;


    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    };

    dispatch(addContacts(id, name, number))
  };


  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);


  const handleDeleteContact = id => {
    dispatch(deleteContacts(id))
  };


  const handleFilter = e => {
    dispatch(filterAction(e))
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        filter={filter}
      />
    </div>
  );
}