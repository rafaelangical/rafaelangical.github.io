import Image from 'next/image';
import styled from 'styled-components';

export const Row = styled.div`
  margin: 0 auto;
  display: flex;
  height: auto;
  margin-top: calc(30vh - 100px);
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  @media (min-width: 992px) {
    width: 50%;;
  }
  @media (max-height: 768px) {
    margin-top: calc(20vh - 100px);
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
  position: relative;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const TitleWorks = styled(Title)`
  margin: 50px 16px;
`;

export const RowSubTitle = styled(Row)`
  margin-top: 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const SubTitle = styled.h3`
  width: 100%;
  font-size: 24px;
  color: #666;
  text-justify: start;
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-height: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const Img = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const RowPosts = styled(Row)`
  width: 100%;
  max-width: 992px;
  border-top-left-radius: 100px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 100px;
  height: auto;
  display: flex;
  background-color: rgba(0, 0, 139, 0.9);
  padding: 32px;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 24px;
    align-self: top;
    color: #fff;
  }
  @media (min-width: 991px) {
    flex-direction: row;
  }
  margin-bottom: 30px;
`;

export const RowWorks = styled(Row)`
  width: 100%;
  max-width: 992px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 60px;
  h4 {
    font-size: 24px;
    align-self: top;
  }
  margin-bottom: 50px;
  a {
    color: darkblue;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      font-weight: 700;
    }
  }
`;

export default Row;