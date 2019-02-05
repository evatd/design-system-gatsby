import React from "react";

// css in these components isn't applied
// add styles to nested <code> here
const Paragraph = ({ ...props }) => (
  <p
    {...props}
    style={{
      fontSize: "16px",
      lineHeight: 1.6,
      marginBottom: "1rem",
      letterSpacing: "0.01em"
    }}
  />
);

export default Paragraph;
