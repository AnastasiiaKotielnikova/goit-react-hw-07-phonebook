import { RingLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 140px',
  opacity: '0.3',
};

const Loader = () => {
  return (
    <RingLoader
      cssOverride={override}
      size={120}
      aria-label="Loading Spinner"
    />
  );
};

export default Loader;
