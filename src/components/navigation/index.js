import React from "react";
import ListLink from "components/list-link";

const Navigation = () => {
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        justifyContent: "flex-end",
        flex: "auto"
      }}
    >
      {Object.entries({
        Patterns: "/foundations/getting-started/",
        Email: "/email",
        Practices: "/practices"
      }).map(([label, href]) => (
        <ListLink to={href} key={label}>
          {label}
        </ListLink>
      ))}
    </ul>
  );
};

export default Navigation;
