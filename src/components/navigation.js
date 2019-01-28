import { Link } from "gatsby";
import React from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Navigation = () => {
  return (
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="test">{"test"}</ListLink>
    </ul>
  );
};

export default Navigation;
