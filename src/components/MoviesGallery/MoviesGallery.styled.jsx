import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 39px;

  margin-bottom: 32px;
  padding: 0;
`;

export { List };
