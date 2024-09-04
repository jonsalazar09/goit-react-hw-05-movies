import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovieCast } from 'helpers/api';

import Loader from 'components/Loader/Loader';
import CastGallery from 'components/CastGallery';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieCastData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { cast },
        } = await fetchMovieCast(movieId);

        getMovieCast(cast);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovieCast = cast => {
      if (cast.length !== 0) {
        setMovieCast(cast);
      } else {
        Notify.failure('Sorry, there are no movie cast.');
      }
    };

    fetchMovieCastData();
  }, [movieId]);

  return (
    <>
      {movieCast.length !== 0 && <CastGallery data={movieCast} />}

      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
