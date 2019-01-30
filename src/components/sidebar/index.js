import { StaticQuery, graphql } from "gatsby";
import React from "react";
import ListLink from "components/list-link";

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
        <ul
          style={{
            listStyle: `none`,
            display: "flex",
            flexDirection: "column",
            width: "auto",
            background: "beige",
            minHeight: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto"
          }}
        >
          {data.allMdx.edges.map(({ node }) => {
            const item = node.frontmatter.title;
            const slug = node.fields.slug;
            return (
              <ListLink to={slug} key={node.id} style={{ padding: "0.5rem 1rem"}}>
                {item}
              </ListLink>
            );
          })}
        </ul>
      </>
    )}
  />
);

export default Sidebar;
