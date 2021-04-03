import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  max-height: fit-content;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  @media (max-width: 991px) {
    width: 100%;
  }
  h4, span, p {
    padding: 0;
    margin: 20px 10px;
  } 
  h4 {
    font-size: 18px;
  }
  span {
    padding: 5px 10px;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    background-color: #fff;
    color: darkblue;
    font-weight: bold; 
  }
  p {
    color: #888;
    margin-bottom: 32px;
  }
`;