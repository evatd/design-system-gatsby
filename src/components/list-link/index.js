import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

const ListLink = ({ to, children, ...props }) => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`
    }}
    {...props}
  >
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "#1d1d1d",
        fontWeight: 600
      }}
    >
      {children}
    </Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default ListLink;
