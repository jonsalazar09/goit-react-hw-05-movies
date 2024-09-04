import PropTypes from 'prop-types';

import CastGalleryItem from 'components/CastGalleryItem';

import { List } from 'components/CastGallery/CastGallery.styled';

const CastGallery = ({ data }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <CastGalleryItem element={element} />
        </li>
      ))}
    </List>
  );
};

CastGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CastGallery;
