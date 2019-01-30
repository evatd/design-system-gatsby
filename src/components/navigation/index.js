import { Link } from "gatsby";
import React from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Navigation = () => {
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        height: "100%"
      }}
    >
      {Object.entries({
        Web: "/",
        Email: "/email",
        Brand: "/brand"
      }).map(([label, href]) => (
        <li key={label}>
          <ListLink to={href}>{label}</ListLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
