import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 25px auto;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 25px;
  overflow: hidden;

  background-color: #fafafa;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0;
  padding-left: 16px;

  border: none;
  outline: none;
  height: 30px;

  background-color: #fafafa;

  font: inherit;
  font-size: 20px;
  letter-spacing: 0.02em;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 50px;

  cursor: pointer;

  background-color: transparent;

  opacity: 0.6;
  transition: all var(--animation-duration) var(--timing-function);

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    color: #0967c2;
  }
`;

const SearchIconWrap = styled.span`
  display: flex;
  justify-content: center;
`;

export { Form, SearchBtn, SearchIconWrap, Input };
