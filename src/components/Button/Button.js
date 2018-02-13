import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  background-color: transparent;
  padding: 20px 40px;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.5s;
  &:focus {
    outline: none;
  }
`;

export default Button;
