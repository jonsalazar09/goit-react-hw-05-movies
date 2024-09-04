import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Container, List, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </List>
          </nav>
        </Container>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
