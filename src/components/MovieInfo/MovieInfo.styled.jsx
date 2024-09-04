import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1408px;

  margin-bottom: 20px;
  padding: 12px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;

  background-color: #f3f6f9;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 767.99px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Thumb = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 375px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextWrap = styled.div``;
const Name = styled.h2`
  margin-bottom: 32px;
  color: #112236;
  text-shadow: 2px 4px 4px rgb(44 101 158);

  font-weight: 700;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0.02em;

  @media screen and (max-width: 382px) {
    font-size: 4.7vw;
  }
`;
const Span = styled.span`
  font-style: italic;
`;

const TextTitle = styled.h3`
  margin-bottom: 32px;

  color: #112236;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(28 / 24);
  letter-spacing: 0.02em;

  @media screen and (max-width: 382px) {
    font-size: 4.7vw;
  }
`;

const Text = styled.p`
  margin-bottom: 44px;

  color: #516174;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.02em;

  @media screen and (max-width: 382px) {
    font-size: 4.18vw;

    hyphens: auto;
  }
`;

export { Wrapper, Thumb, Image, TextWrap, Name, Span, TextTitle, Text };
