import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Header from "./header";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.section`
  align-items: center;
  padding: 2rem;
`;

const theme = {
  colors: {
    red: "#8B0000"
  }
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={globalStyles} />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header title={data.site.siteMetadata.title} />
            {children}
          </Wrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
