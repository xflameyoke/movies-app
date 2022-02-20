import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledUL from './moviesList.styled';

const MovieList = ({ id, episode_id, title }) => (
  <StyledUL>
    <li key={episode_id}>
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  </StyledUL>
);

MovieList.propTypes = {
  id: PropTypes.number,
  episode_id: PropTypes.string,
  title: PropTypes.string,
};

export default MovieList;
