import React from "react";

const Paragraph = ({ ...props }) => (
  <p {...props} style={{ fontSize: "16px", lineHeight: 1.5 }} />
);

export default Paragraph;
