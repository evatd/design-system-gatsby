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
        Web: "/",
        Email: "/email",
        Brand: "/brand"
      }).map(([label, href]) => (
        <ListLink to={href} key={label}>
          {label}
        </ListLink>
      ))}
    </ul>
  );
};

export default Navigation;
