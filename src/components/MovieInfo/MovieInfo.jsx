import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-500x750.png';

import {
  Wrapper,
  Thumb,
  Image,
  TextWrap,
  Name,
  Span,
  TextTitle,
  Text,
} from 'components/MovieInfo/MovieInfo.styled';

const MovieInfo = ({
  details: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  const date = new Date(release_date).getFullYear();
  const score = Math.round(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(' / ');

  return (
    <>
      <Wrapper>
        <Thumb>
          {poster_path ? (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          ) : (
            <Image src={noImageIcon} alt={title} />
          )}
        </Thumb>
        <TextWrap>
          <Name>
            {title}
            <Span> ({date})</Span>
          </Name>
          <Text>User Score: {score}%</Text>
          <TextTitle>Overview</TextTitle>
          <Text>{overview ? overview : 'No overview'}</Text>
          <TextTitle>Genres</TextTitle>
          <Text>{genres ? movieGenres : 'No information'}</Text>
        </TextWrap>
      </Wrapper>
    </>
  );
};

MovieInfo.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieInfo;
