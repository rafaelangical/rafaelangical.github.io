import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  height: 36px;
  font-size: 18px;
  border: 2px solid darkblue;
  border-radius: 4px;
  color: #000;
  padding: 0px 10px;
  margin: 16px 0px;
  
  @media (max-width: 768px) { 
    font-size: 14px;
  }
`;