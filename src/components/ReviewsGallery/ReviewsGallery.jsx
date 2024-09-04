import PropTypes from 'prop-types';

import ReviewsGalleryItem from 'components/ReviewsGalleryItem';

import { List } from 'components/ReviewsGallery/ReviewsGallery.styled';

const ReviewsGallery = ({ data }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <ReviewsGalleryItem element={element} />
        </li>
      ))}
    </List>
  );
};

ReviewsGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReviewsGallery;
