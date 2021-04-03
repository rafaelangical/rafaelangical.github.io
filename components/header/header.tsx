import Link from 'next/link';
import React from 'react';
import { Nav, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/works">
          <a>Works</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Header;