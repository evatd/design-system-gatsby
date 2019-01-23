import React from "react";

const Heading = ({ as: Component, ...props }) => (
  <Component {...props} css={{ color: "blue" }} />
);

export default Heading;
