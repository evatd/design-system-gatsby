import React from "react";
import Heading from "../heading";
import Code from "./code";
import { P } from "./p";

/* eslint-disable react/display-name */
export default {
  h1: props => <Heading {...props} as="h1" fontSize="90px" />,
  h2: props => <Heading {...props} as="h2" fontSize="80px" />,
  h3: props => <Heading {...props} as="h3" fontSize="20px" />,
  h4: props => <Heading {...props} as="h4" fontSize="20px" />,
  h5: props => <Heading {...props} as="h5" fontSize="20px" />,
  h6: props => <Heading {...props} as="h6" fontSize="20px" />,
  pre: props => {
    if (props.children.props.name === "code") {
      // mdxTag has children prop, which is source code
      // mdxTagProps.props is the props to pass to `code`, including meta props
      const mdxTagProps = props.children.props;
      const lang = do {
        if (mdxTagProps.props.className) {
          const match = mdxTagProps.props.className.match(/language-([a-z]*)/);
          if (match && match[1]) {
            match[1];
          }
        } else {
          ("markup");
        }
      };
      return (
        <Code is="block" {...mdxTagProps} {...mdxTagProps.props} lang={lang} />
      );
    } else {
      return <pre {...props} />;
    }
  },
  code: props => <Code is="block" {...props} />,
  p: P,
  inlineCode: Code
  // TODO add `a`
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
