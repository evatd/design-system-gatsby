import { Link, StaticQuery, graphql } from "gatsby";
import React, { Fragment } from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Navigation = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TitleQuery {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allMdx.edges.map(({ node }) => {
          const item = node.frontmatter.title;
          const slug = navItem.toLowerCase();
          const ifHomePage = slug === "home";
          return (
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to={ifHomePage ? "/" : slug} key={node.id}>
                {item}
              </ListLink>
            </ul>
          );
        })}
      </>
    )}
  />
);

const Header = ({ title }) => (
  <Fragment>
    <header style={{ backgroundColor: "beige" }}>
      <Link
        to="/"
        style={{
          color: "purple",
          textDecoration: "none"
        }}
      >
        {title}
      </Link>
      <Navigation />
    </header>
  </Fragment>
);

Header.defaultProps = {
  title: "Design System"
};

export default Header;
