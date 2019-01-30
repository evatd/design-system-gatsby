import React from "react";

const ListItem = ({ ...props }) => (
  <li {...props} style={{ marginBottom: "1rem" }} />
);

export default ListItem;
