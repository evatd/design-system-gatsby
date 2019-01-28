
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
          <header style={{ backgroundColor: "beige" }}>
            <Link
              to="/"
              style={{
                color: "purple",
                textDecoration: "none"
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
