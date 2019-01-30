import React from "react";

const Heading = ({ as: Component, ...props }) => (
  <Component {...props} style={{ lineHeight: 1.2, padding: "2rem 0 1rem" }} />
);

export default Heading;
