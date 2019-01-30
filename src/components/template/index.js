import React from "react";
import Heading from "../heading";
import Paragraph from "../paragraph";
import List from "../list";
import Code from "../code";
import ListItem from "../list-item";
import Link from "../link";

export default {
  h1: props => <Heading {...props} as="h1" fontSize="40px" />,
  h2: props => <Heading {...props} as="h2" fontSize="25px" />,
  h3: props => <Heading {...props} as="h3" fontSize="22px" />,
  h4: props => <Heading {...props} as="h4" fontSize="20px" />,
  h5: props => <Heading {...props} as="h5" fontSize="18px" />,
  h6: props => <Heading {...props} as="h6" fontSize="16px" />,
  p: props => <Paragraph {...props} />,
  ul: props => <List {...props} />,
  code: props => <Code {...props} />,
  li: props => <ListItem {...props} />,
  a: props => <Link {...props} />
};
