import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selectors';

const PhoneBook = () => {
  const filteredContacts = useSelector(selectVisibleContact);

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
