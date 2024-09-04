import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 20px 0;
`;

const Container = styled.div`
  max-width: 1440px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #112236;
  text-shadow: 2px 4px 4px rgb(44 101 158);
  font-size: 32px;
  line-height: calc(36 / 32);
  letter-spacing: 0.02em;
`;

export { SectionWrapper, Container, Title };
