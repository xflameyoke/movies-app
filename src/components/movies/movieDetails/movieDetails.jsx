import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../../utils/urls';
import LoadingSpinner from '../../loadingSpinner/loadingSpinner';
import { StyledSection, StyledH1, StyledUL } from './movieDetails.styled';

const MovieDetails = () => {
  const [moviesDetail, setMoviesDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(url.swapi);
      const transformedMovies = response.data.results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMoviesDetail(transformedMovies);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log('1st fetch' + moviesDetail);

  const filteredMovies = moviesDetail
    .filter((moviesDetail) => moviesDetail.episode_id.toString() === id)
    .map(({ episode_id, title, director, release_date, opening_crawl }) => (
      <StyledUL>
        <li key={episode_id}>
          <StyledH1>{title}</StyledH1>
        </li>
        <li>
          <span>Director: </span>
          {director}
        </li>
        <li>
          <span>Release date: </span>
          {release_date}
        </li>
        <li>
          <span>Opening Crawl: </span>
          {opening_crawl}
        </li>
      </StyledUL>
    ));

  return (
    <StyledSection>
      <StyledH1>Movie Details</StyledH1>
      {isLoading ? <LoadingSpinner /> : filteredMovies}
    </StyledSection>
  );
};

export default MovieDetails;
