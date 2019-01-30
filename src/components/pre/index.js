import React from "react";

const Pre = ({ ...props }) => (
  <pre
    {...props}
    style={{ color: "#3dd2be", margin: "2rem 0", padding: "1rem", background: "#f3f3f3" }}
  />
);

export default Pre;