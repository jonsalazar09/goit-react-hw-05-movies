import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchTrendMovies } from 'helpers/api';

import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendMoviesData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results, total_pages },
        } = await fetchTrendMovies(currentPage);
        getTrendMovies(results, total_pages);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getTrendMovies = (results, total_pages) => {
      if (results.length !== 0) {
        setMovies(prevState => [...prevState, ...results]);
        setTotalPages(total_pages);
      } else {
        Notify.failure(
          'Sorry, there are no movies in trend. Please try later.'
        );
      }
    };

    fetchTrendMoviesData();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <Section title="Trending today">
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

export default Home;
