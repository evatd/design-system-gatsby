import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Sidebar from "components/sidebar";
import Header from "components/header";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.section`
maxWidth: "1500px",
margin: "0 auto",
padding: "2rem"
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
          <div style={{ width: "100%" }}>
            <Wrapper
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "2rem"
              }}
            >
              {children}
            </Wrapper>
          </div>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
