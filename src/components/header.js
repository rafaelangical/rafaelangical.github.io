import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LogoHopme from "../components/LogoHome";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(75,144,225)`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        maxWidth: 150,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <LogoHopme />
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
