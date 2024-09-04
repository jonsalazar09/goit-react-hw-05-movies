import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovies } from 'helpers/api';

import Searchbar from 'components/Searchbar/Searchbar';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMoviesData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results, total_pages },
        } = await fetchMovies(query, currentPage);
        getMovies(results, total_pages);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovies = (results, total_pages) => {
      if (results.length !== 0) {
        setMovies(prevState => [...prevState, ...results]);

        setTotalPages(total_pages);
      } else {
        Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
    };

    fetchMoviesData();
  }, [currentPage, query]);

  const getQuery = queryValue => {
    if (!queryValue) {
      Notify.info(
        'Sorry, you need to fill in the search field to search for movies.'
      );

      return;
    }

    setSearchParams({ query: queryValue });
    setMovies([]);
    setCurrentPage(1);
  };

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <Section>
        <Searchbar getQuery={getQuery} />

        {movies.length > 0 && (
          <>
            <MoviesGallery data={movies} />
            {currentPage < totalPages && !isLoading && (
              <Button text="Load more" onClickBtn={onLoadMore} />
            )}
          </>
        )}
      </Section>
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
