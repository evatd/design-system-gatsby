import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Sidebar from "components/sidebar";
import Header from "components/header";

const font = require("../../style/font-face").fontFace;

///require
const globalStyles = css`
  ${font};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Hurme Geometric Sans 3";
  }
`;

// update width to 100% on mpbile, hide the sidebar
const Section = styled.section`
  width: 80%;
  padding: 2rem;
`;

// adjust widths as per breakpoints
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const theme = {
  colors: {
    red: "#8B0000"
  }
};

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Section>
            <ContentWrapper>{children}</ContentWrapper>
          </Section>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
