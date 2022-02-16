import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({
  id,
  episode_id,
  title,
  director,
  release_date,
  opening_crawl,
}) => (
  <ul>
    <li key={episode_id}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
    <li>{director}</li>
    <li>{release_date}</li>
    <li>{opening_crawl}</li>
  </ul>
);

export default MovieList;
