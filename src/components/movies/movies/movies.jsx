import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../../utils/urls';
import LoadingSpinner from '../../loadingSpinner/loadingSpinner';
import MovieList from '../moviesList/moviesList';
import Container from '../../common/container';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(url.swapi);
      const transformedMovies = response.data.results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMovies(transformedMovies);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(movies);

  const mappedMovies = movies.map(({ episode_id, title }) => (
    <MovieList key={episode_id} id={episode_id} title={title} />
  ));
  return (
    <section>
      <Container>
        <h2>List of Starwars Movies</h2>
        {isLoading ? <LoadingSpinner /> : mappedMovies}
      </Container>
    </section>
  );
};

export default Movies;
