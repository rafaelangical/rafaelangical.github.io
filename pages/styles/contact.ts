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

export const Fieldset = styled.textarea`
  width: 100%;
  height: 120px;
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


export const Label = styled.label`
  font-size: 18px;
  color: darkblue;
  font-weight: bold;
  @media (max-width: 768px) { 
    font-size: 14px;
  }
`;