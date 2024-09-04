import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-250x375.png';

import {
  Wrapper,
  Thumb,
  Image,
  TextWrap,
  Name,
  Text,
} from 'components/CastGalleryItem/CastGalleryItem.styled';

const CastGalleryItem = ({ element: { profile_path, name, character } }) => {
  return (
    <>
      <Wrapper>
        <Thumb>
          {profile_path ? (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
          ) : (
            <Image src={noImageIcon} alt={name} />
          )}
        </Thumb>
        <TextWrap>
          <Name>{name}</Name>
          {character && <Text>Character: {character}</Text>}
        </TextWrap>
      </Wrapper>
    </>
  );
};

CastGalleryItem.propTypes = {
  element: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastGalleryItem;
