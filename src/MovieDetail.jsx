import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

function MovieDetail({ movie, onBack }) {
  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameborder="0"
        allowfullscreen
      ></iframe>
       <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default MovieDetail;
