export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <div className='div'>
      <span>{contact.name}</span>
      <span> {contact.number}</span>
      <button className='btnDelete' onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};


