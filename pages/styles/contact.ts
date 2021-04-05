import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1, p {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 20px 0;
    font-size: 2em;
  }

  @media (max-width: 768px) { 
    p {
      font-size: 18px !important;
    }
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: darkblue;
  font-weight: bold;
  @media (max-width: 768px) { 
    font-size: 14px;
  }
`;