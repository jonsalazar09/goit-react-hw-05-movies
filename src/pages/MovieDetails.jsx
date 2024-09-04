import { useState, useRef, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovieDetails } from 'helpers/api';

import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import BackLink from 'components/BackLink';
import MovieInfo from 'components/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo';

import { Text } from 'components/ReviewsGalleryItem/ReviewsGalleryItem.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieDetailsData = async () => {
      setIsLoading(true);

      try {
        const { data } = await fetchMovieDetails(movieId);

        getDetails(data);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getDetails = data => {
      if (data.length !== 0) {
        setDetails(data);
      } else {
        Notify.failure('Sorry, there are no movie details.');
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  return (
    <>
      <Section>
        <BackLink to={backLinkLocation.current}>Go back</BackLink>

        {details.length !== 0 && <MovieInfo details={details} />}

        <AdditionalInfo />
      </Section>
      <Section>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Outlet />
        </Suspense>
      </Section>
      {isLoading && <Loader />}
    </>
  );
};

export default MovieDetails;
