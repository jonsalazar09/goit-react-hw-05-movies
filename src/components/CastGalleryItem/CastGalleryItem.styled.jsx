import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 125px;
  height: 100%;

  border: 1px solid #e5eaf1;
  border-radius: 4px;
  overflow: hidden;

  background-color: #f3f6f9;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    overflow: visible;
  }
`;

const Thumb = styled.div`
  max-width: 125px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  transition: transform var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(2);
    cursor: zoom-in;
  }
`;

const TextWrap = styled.div`
  flex-grow: 1;

  padding: 8px;
`;

const Name = styled.h2`
  color: #112236;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18);
  letter-spacing: 0.02em;
`;

const Text = styled.p`
  color: #516174;

  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: 0.02em;
`;

export { Wrapper, Thumb, Image, TextWrap, Name, Text };
