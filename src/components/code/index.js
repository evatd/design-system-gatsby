import React from "react";
import ListLink from "components/list-link";
import Header from "components/header";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// add scope via withMdxComponents
const Code = ({ children }) => {
  const code = children.props.children.trim();
  return (
    <LiveProvider code={code} scope={{ ListLink, Header }}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default Code;
