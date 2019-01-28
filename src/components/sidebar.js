import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
);

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query ItemQuery {
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
          const slug = item.toLowerCase();
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

export default Sidebar;
