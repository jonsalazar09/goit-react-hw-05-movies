import PropTypes from 'prop-types';

import userAvatarIcon from '../../icons/userAvatarIcon-512x512.png';

import {
  Wrapper,
  Thumb,
  Image,
  TextWrap,
  Name,
  Text,
} from 'components/ReviewsGalleryItem/ReviewsGalleryItem.styled';

const ReviewsGalleryItem = ({ element: { author, content } }) => {
  return (
    <>
      <Wrapper>
        <Thumb>
          <Image src={userAvatarIcon} alt={author} />
        </Thumb>
        <TextWrap>
          <Name>{author}</Name>
          <Text>{content}</Text>
        </TextWrap>
      </Wrapper>
    </>
  );
};

ReviewsGalleryItem.propTypes = {
  element: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsGalleryItem;
