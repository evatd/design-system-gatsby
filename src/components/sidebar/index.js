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
        <div
          style={{
            width: "20%",
            top: 0,
            position: "sticky",
            overflowY: "auto",
            height: "100vh"
          }}
        >
          <ul
            style={{
              listStyle: `none`,
              background: "#F8F8F8",
              padding: "1rem 0 0 1rem",
              height: "inherit"
            }}
          >
            {data.allMdx.edges.map(({ node }) => {
              const item = node.frontmatter.title;
              const slug = node.fields.slug;
              return (
                <ListLink
                  to={slug}
                  key={node.id}
                  style={{ padding: "1em 1rem 0rem 1rem" }}
                >
                  {item}
                </ListLink>
              );
            })}
          </ul>
        </div>
      </>
    )}
  />
);

export default Sidebar;
