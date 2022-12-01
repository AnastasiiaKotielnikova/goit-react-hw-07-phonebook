import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { Container } from './Filter.styled';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const filter = evt.currentTarget.value;
    dispatch(changeFilter(filter));
  };

  return (
    <Container>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleFilter}
          required
        />
      </label>
    </Container>
  );
};

export default Filter;
