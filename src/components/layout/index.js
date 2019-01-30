import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Sidebar from "components/sidebar";
import Header from "components/header";

// create an alias for style
import theme from "../../style/theme";
import { globalStyles } from "../../style/global";

// update width to 100% on mobile, hide the sidebar
const Section = styled.section`
  width: 80%;
  padding: 2rem;
`;

// adjust widths as per breakpoints
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar {...theme} />
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
