import styled from 'styled-components';
import { Props } from './footer';

export const Wrapper = styled.footer<Props>`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  left: 0;
  padding: 0 16px;
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
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
