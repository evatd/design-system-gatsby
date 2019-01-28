import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

const Template = ({ data: { mdx } }) => {
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

export default Template;
