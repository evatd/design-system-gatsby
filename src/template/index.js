import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import templateComponents from "components/template";

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
      <MDXRenderer components={templateComponents}>{mdx.code.body}</MDXRenderer>
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
