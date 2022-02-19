import React from 'react';
import { Link } from 'react-router-dom';
import StyledUL from './moviesList.styled';

const MovieList = ({
  id,
  episode_id,
  title,
}) => (
  <StyledUL>
    <li key={episode_id}>
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  </StyledUL>
);

export default MovieList;
