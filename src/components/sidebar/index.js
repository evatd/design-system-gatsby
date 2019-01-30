import { StaticQuery, graphql } from "gatsby";
import React from "react";
import ListLink from "components/list-link";

const Sidebar = ({ ...theme }) => {
  const { space, colors } = theme;
  return (
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
                background: `${colors.tonal[0]}`,
                padding: `${space[3]} 0 0 ${space[3]}`,
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
                    style={{
                      padding: `${space[3]}  ${space[3]} 0  ${space[3]}`
                    }}
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
};

export default Sidebar;
