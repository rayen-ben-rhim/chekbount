import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="movie-card"
          onClick={() => onMovieClick(movie)}
        >
          <h2 className="movie-title">{movie.title}</h2>
          <img className="movie-poster" src={movie.posterURL} alt="Movie Poster" />
          <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
