import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const PhoneBook = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <Container>
      <ContactList>
        {filteredContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ContactList>
    </Container>
  );
};

export default PhoneBook;
