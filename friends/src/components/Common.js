import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #40a1bb;
  color: #f5f8f7;
  font-size: 2rem;
  border: 2px solid #40a1bb;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #f5f8f7;
    color: #40a1bb;
  }

  ${props =>
    props.error &&
    css`
      border-color: darkred;
      background-color: darkred;
      color: white;
      &:hover {
        color: darkred;
        background-color: white;
      }
    `}

  ${props =>
    props.default &&
    css`
      border-color: #999999;
      background-color: #999999;
      color: white;
      &:hover {
        background-color: white;
        color: #999999;
      }
    `}
`;
