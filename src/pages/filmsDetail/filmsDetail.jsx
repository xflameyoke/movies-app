import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../utils/urls';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import MovieList from '../../components/movies/movieList';

const FilmsDetail = () => {
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
      <MovieList
        key={episode_id}
        title={title}
        director={director}
        release_date={release_date}
        opening_crawl={opening_crawl}
      />
    ));

  return (
    <section>
      <h1>Films Detail</h1>
      {isLoading ? <LoadingSpinner /> : filteredMovies}
    </section>
  );
};

export default FilmsDetail;
