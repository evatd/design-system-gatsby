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
              fields {
                slug
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
          const slug = node.fields.slug;
          return (
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to={slug} key={node.id}>
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
