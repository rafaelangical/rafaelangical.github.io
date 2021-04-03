import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  padding: 0 16px;
`;

export const Row = styled.div`
  width: fit-content;
  height: auto;
  margin: 0  auto;

  svg {
    font-size: 32px;
    margin: 0 16px;
    &:hover {
      font-size: 40px;
      transition: width 1s;
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 16px;
`

export const Nav = styled.nav`
  width: 100%;
`;
