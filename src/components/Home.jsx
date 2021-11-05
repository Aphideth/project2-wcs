import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=5727abed527bf8c8099d66876a9bf967&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    );
    const movies = await data.json();
    setItems(movies.results);
    console.log(movies.results);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="home">
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

export default Home;
