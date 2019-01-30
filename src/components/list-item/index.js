import React from "react";

// matches the paragraph - extend the latter?
const ListItem = ({ ...props }) => (
  <li {...props} style={{ lineHeight: 1.6, letterSpacing: "0.01em" }} />
);

export default ListItem;
