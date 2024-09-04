import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: -1px;
  z-index: 1100;

  padding: 20px 0;
  background-color: rgb(241 243 244);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
  max-width: 1440px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.ul`
  display: flex;
  gap: 40px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  width: 35vw;
  max-width: 150px;
  padding: 8px 0;
  border: 2px solid #e5eaf1;
  border-radius: 24px;

  background-color: #f3f6f9;

  color: #112236;

  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: calc(24 / 20);
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

export { Header, Container, List, StyledNavLink };
