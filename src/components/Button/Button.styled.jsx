import styled from 'styled-components';

const LoadMoreBtn = styled.button`
  display: block;
  min-width: 250px;

  margin: 0 auto;
  padding: 8px 0;

  border: 2px solid #0967c2;
  border-radius: 20px;
  background-color: #e1eefd;
  text-align: center;

  color: #0967c2;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(22 / 18);
  letter-spacing: 0.02em;

  transition: all var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.03);

    color: #fafafa;
    background-color: #0967c2;
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export { LoadMoreBtn };
