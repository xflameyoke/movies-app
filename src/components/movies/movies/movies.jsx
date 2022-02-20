import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../../utils/urls';
import { Container, LoadingSpinner, MoviesList } from '../../../components';

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

  const mappedMovies = movies.map(({ episode_id, title }) => (
    <MoviesList key={episode_id} id={episode_id} title={title} />
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
