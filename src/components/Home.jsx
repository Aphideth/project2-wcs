import PropTypes from 'prop-types';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ items }) => {
  return (
    <div className="home">
      {/* <Carrousel titleName="Les dernières nouveautés"/>
      <Carrousel titleName="Films du moment"/>
      <Carrousel titleName="Séries du moment"/>
      <Article 
        articleName="Ajoutez vos films et séries préférées dans vos favoris!" 
        text="bla bla bla le texte" 
      />   */}
    
      {items.map((movie) => (
        <div className="home-movies-popularity" key={movie.id}>
          <h1><Link to="/Movies" className="link">{movie.title}</Link></h1>
          <h2>{movie.release_date}</h2>
          <Link to="/Movies"><img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          /></Link>
          <p className="m_overview">{movie.overview}</p>
        </div>
      ))}
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
