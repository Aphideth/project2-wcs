import PropTypes from 'prop-types';
import Carrousel from './Carrousel';
import './Home.css';

const Home = ({ items }) => {
  return (
    <div className="home">
      <Carrousel items={items} />
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.instanceOf(Array),
};

Home.defaultProps = {
  items: [],
};

export default Home;
