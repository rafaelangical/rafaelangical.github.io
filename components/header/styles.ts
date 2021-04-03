import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Nav = styled.nav`
  a {
    font-size: 18px;
    margin: 0 24px;
    color: darkblue;
    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      font-weight: bold;
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }  
  
`;
