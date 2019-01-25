import { Link } from "gatsby";
import React, { Fragment } from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Nav = ({ title }) => (
  <Fragment>
    <header style={{ backgroundColor: "orange" }}>
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
        <ListLink to="/components/patterns/"> Patterns</ListLink>
        <ListLink to="/components/header/">Header</ListLink>
      </ul>
    </header>
  </Fragment>
);

Nav.defaultProps = {
  title: "Design System"
};

export default Nav;
