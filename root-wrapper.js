import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/tag";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = css`
  align-items: center;
  padding: 2rem;
`;

const theme = {
  colors: {
    red: "#8B0000"
  }
};

export const universalWrapRootElement = ({ element }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <section styles={Wrapper}>{element}</section>
      </MDXProvider>
    </ThemeProvider>
  </Fragment>
);
