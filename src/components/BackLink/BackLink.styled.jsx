import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35vw;
  max-width: 150px;
  margin-bottom: 20px;

  padding: 4px 0;
  border: 2px solid #e5eaf1;
  border-radius: 20px;

  background-color: #f3f6f9;

  color: #112236;

  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(22 / 18);
  letter-spacing: 0.02em;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: all var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus,
  &.active {
    color: #0967c2;
    background-color: #e1eefd;
    border-color: #0967c2;
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export { StyledLink };
