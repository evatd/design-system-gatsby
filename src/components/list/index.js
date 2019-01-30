import React from "react";

const List = ({ ...props }) => (
  <ul {...props} style={{ padding: "1rem 0", marginLeft: "1rem" }} />
);

export default List;
