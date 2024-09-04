import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 17px;

  padding: 0;
`;

export { List };
