import { Link } from "gatsby";
import React, { Fragment } from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Header = ({ title }) => (
  <Fragment>
    <header style={{ backgroundColor: "beige" }}>
      <Link
        to="/"
        style={{
          color: "purple",
          textDecoration: "none"
        }}
      >
        {title}
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/patterns/">Patterns</ListLink>
        <ListLink to="/header/">Header</ListLink>
      </ul>
    </header>
  </Fragment>
);

Header.defaultProps = {
  title: "Design System"
};

export default Header;
