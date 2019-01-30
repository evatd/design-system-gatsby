import { Link } from "gatsby";
import React from "react";

const ListLink = ({ to, children, ...props }) => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`
    }}
    {...props}
  >
    <Link to={to} style={{ textDecoration: "none", color: "blue" }}>
      {children}
    </Link>
  </li>
);

export default ListLink;
