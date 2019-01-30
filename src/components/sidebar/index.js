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
            background: "#F8F8F8",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            overflowY: "auto",
            paddingTop: "2rem"
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
