import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  max-width: 1408px;
  width: 100%;
  padding: 12px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;

  background-color: #f3f6f9;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 532px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Thumb = styled.div`
  overflow: hidden;

  min-width: 125px;
  height: 125px;
  background-color: #fafafa;

  border: 1px solid #e5eaf1;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextWrap = styled.div``;

const Name = styled.h2`
  margin-bottom: 8px;
  color: #112236;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18);
  letter-spacing: 0.02em;

  @media screen and (max-width: 382px) {
    font-size: 4.7vw;
  }
`;

const Text = styled.p`
  color: #516174;

  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: 0.02em;

  @media screen and (max-width: 382px) {
    font-size: 4.18vw;

    hyphens: auto;
  }
`;

export { Wrapper, Thumb, Image, TextWrap, Name, Text };
