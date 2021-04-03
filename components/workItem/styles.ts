import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid #ccc;
  border-radius: 20px;
  margin-bottom: 24px;
  display: flex;
  padding: 16px;
  @media (max-width: 400px) {
    flex-direction: column;
    img {
      width: 250px !important;
      height: 200px !important;
    }
  }
`;

export const WorkImage = styled(Image)`
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const WorkDescription = styled.div`
  width: calc(100% - 120px);
  height: fit-content;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;  
  overflow: hidden;
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
    background-color: darkblue; 
  }
  p {
    color: #888;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`