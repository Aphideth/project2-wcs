import Carrousel from './Carrousel';
import Carrousel2 from './Carrousel2';
import './Movies.css';

const Movies = ({ recentMovies, popularMovies, setMovieId }) => {
  return (
    <div className="movies">
      <Carrousel recentMovies={recentMovies} setMovieId={setMovieId} />
      <Carrousel2 popularMovies={popularMovies} setMovieId={setMovieId} />
    </div>
  );
};

export default Movies;
