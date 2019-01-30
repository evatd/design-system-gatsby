import React from "react";

const Paragraph = ({ ...props }) => (
  <p {...props} style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "1rem", letterSpacing: "0.01em" }} />
);

export default Paragraph;
