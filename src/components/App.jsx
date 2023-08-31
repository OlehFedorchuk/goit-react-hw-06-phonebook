import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addContacts, deleteContacts, filterAction } from 'redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleAddContact = contact => {
    const { name, id, number } = contact;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} вже є у списку контактів`);
      return;
    }

    dispatch(addContacts(id, name, number));
  };

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const handleFilter = filter => {
    dispatch(filterAction(filter));
  };

  return (
    <div>
      <h1>Телефонна книга</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Контакти</h2>
      <Filter onFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        filter={filter}
      />
    </div>
  );
};