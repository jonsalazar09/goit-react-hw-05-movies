import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100%;

  border: 1px solid #e5eaf1;
  border-radius: 8px;
  overflow: hidden;

  background-color: #f3f6f9;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: all var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    color: #0967c2;
    background-color: #e1eefd;
    border-color: #0967c2;
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const Thumb = styled.div`
  max-width: 250px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  transition: transform var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const TextWrap = styled.div`
  flex-grow: 1;

  padding: 8px;
`;

const Name = styled.h2`
  color: #112236;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.02em;
`;

export { Wrapper, Thumb, Image, TextWrap, Name };
