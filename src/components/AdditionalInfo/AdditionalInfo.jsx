import { TextTitle, List, StyledNavLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <>
      <div>
        <TextTitle>Additional information</TextTitle>
        <List>
          <li>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </li>
        </List>
      </div>
    </>
  );
};

export default AdditionalInfo;
