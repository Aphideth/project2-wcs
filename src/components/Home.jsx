import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ items }) => {
  return (
/*   <div className="home">
//      <Carrousel titleName="Les dernières nouveautés"/>
//      <Carrousel titleName="Films du moment"/>
//      <Carrousel titleName="Séries du moment"/>
//      <Article 
//        articleName="Ajoutez vos films et séries préférées dans vos favoris!" 
//        text="bla bla bla le texte" 
    />  */
    
      {items.map((movie) => (
        <div className="home-movies-popularity" key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
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
