import React from "react";
import ListLink from "components/list-link";
import Header from "components/header";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// add scope via withMdxComponents
// only use react-live if prop `jsx` is provided.
const Code = ({ children, ...props }) => {
  // console.log(children, "children code");

  return (
    <LiveProvider code={children.trim()} scope={{ ListLink, Header }}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
  // <code {...props} style={{ color: "#3dd2be", background: "#f3f3f3" }} />
};

export default Code;
