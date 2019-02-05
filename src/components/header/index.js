import { Link, StaticQuery, graphql } from "gatsby";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Navigation from "components/navigation";

const Header = ({ title }) => (
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
        <Fragment>
          <header
            style={{
              backgroundColor: "#f3f3f3",
              display: "flex",
              padding: "2rem 0.5rem"
            }}
          >
            <Link
              to="/"
              style={{
                color: "#1d1d1d",
                textDecoration: "none",
                marginLeft: "1.5rem"
              }}
            >
              {title || data.site.siteMetadata.title}
            </Link>
            <Navigation />
          </header>
        </Fragment>
      </>
    )}
  />
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
