import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovieReviews } from 'helpers/api';

import Loader from 'components/Loader/Loader';
import ReviewsGallery from 'components/ReviewsGallery';

import { Text } from 'components/MovieInfo/MovieInfo.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieReviewsData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        getMovieReviews(results);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovieReviews = results => {
      if (results.length !== 0) {
        setMovieReviews(results);
      } else {
        Notify.failure('Sorry, there are no movie reviews.');
      }
    };

    fetchMovieReviewsData();
  }, [movieId]);

  return (
    <>
      {movieReviews.length !== 0 ? (
        <ReviewsGallery data={movieReviews} />
      ) : (
        <Text>
          We don't have any reviews for this movie. But you can keep yours...
        </Text>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
