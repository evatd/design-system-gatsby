import React from "react";
import { css } from "@emotion/core";

import Heading from "../heading";
import Paragraph from "../paragraph";
import List from "../list";
import Pre from "../pre";
import Code from "../code";
import ListItem from "../list-item";
import Link from "../link";

// example of using emotion,
// update others, as fontsize isn't applied
export default {
  h1: props => (
    <Heading
      {...props}
      as="h1"
      css={css`
        font-size: 60px;
        letter-spacing: 1px;
      `}
    />
  ),
  h2: props => <Heading {...props} as="h2" fontSize="25px" />,
  h3: props => <Heading {...props} as="h3" fontSize="22px" />,
  h4: props => <Heading {...props} as="h4" fontSize="20px" />,
  h5: props => <Heading {...props} as="h5" fontSize="18px" />,
  h6: props => <Heading {...props} as="h6" fontSize="16px" />,
  p: props => <Paragraph {...props} />,
  ul: props => <List {...props} />,
  pre: props => {
    console.log(props, "pre props")
    return<Pre {...props} />
  },
  li: props => <ListItem {...props} />,
  a: props => <Link {...props} />,
  // not reaching nested <code>, e.g. `text`
  code: props => <Code {...props} />
};
