import { Container } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Container>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;
