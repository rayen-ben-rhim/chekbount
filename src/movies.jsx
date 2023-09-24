import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetail from './MovieDetail';

function Movies() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies] = useState([
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to steal their secrets.',
      posterURL: 'inception-poster.jpg',
      rating: 4.8,
      trailerLink: 'https://www.youtube.com/embed/8hP9D6kZseM',
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'shawshank-redemption-poster.jpg',
      rating: 4.9,
      trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco',
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'pulp-fiction-poster.jpg',
      rating: 4.7,
      trailerLink: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'godfather-poster.jpg',
      rating: 4.9,
      trailerLink: 'https://www.youtube.com/embed/sY1S34973zA',
    },
    {
      title: 'Forrest Gump',
      description: 'The story of a man with a low IQ who rose to fame through his extraordinary life experiences.',
      posterURL: 'forrest-gump-poster.jpg',
      rating: 4.8,
      trailerLink: 'https://www.youtube.com/embed/bLvqoHBptjg',
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterURL: 'dark-knight-poster.jpg',
      rating: 4.7,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      title: 'Schindler\'s List',
      description: 'In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      posterURL: 'schindlers-list-poster.jpg',
      rating: 4.9,
      trailerLink: 'https://www.youtube.com/embed/gG22XNhtnoY',
    },
    {
      title: 'The Matrix',
      description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity.',
      posterURL: 'matrix-poster.jpg',
      rating: 4.6,
      trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
  ]);
  

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleFilterChange = (filters) => {
    const { title, rating } = filters;
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title) && movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToHome = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Movie Library</h1>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} onBack={handleBackToHome} />
      ) : (
        <>
          <Filter onFilterChange={handleFilterChange} />
          <MovieList
            movies={filteredMovies.length > 0 ? filteredMovies : movies}
            onMovieClick={handleMovieClick}
          />
        </>
      )}
    </div>
  );
}

export default Movies;
