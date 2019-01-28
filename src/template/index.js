import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import Layout from "components/layout";

const reduceNav = mdx => {
  console.log(mdx, "mdxreduce");
  return null;
};

export default ({ data: { mdx } }) => {
  console.log(mdx, "mdx");
  const itemList = reduceNav(mdx);

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
      fields {
        slug
      }
    }
  }
`;
