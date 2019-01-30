import { Link, StaticQuery, graphql } from "gatsby";
import React, { Fragment } from "react";
import Navigation from "components/navigation";

const Header = () => (
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
              backgroundColor: "#F8F8F8",
              display: "flex",
              padding: "2rem 0.5rem"
            }}
          >
            <Link
              to="/"
              style={{
                color: "purple",
                textDecoration: "none",
                marginLeft: "1.5rem"
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
            <Navigation />
          </header>
        </Fragment>
      </>
    )}
  />
);

export default Header;
