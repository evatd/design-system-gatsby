// // src/components/posts-page-layout.js
// import React from "react";
// import { graphql } from "gatsby";
// import MDXRenderer from "gatsby-mdx/mdx-renderer";

// function PageTemplate({ data: { mdx } }) {
//   return (
//     <div>
//       <h1>{mdx.frontmatter.title}</h1>
//       <MDXRenderer>{mdx.code.body}</MDXRenderer>
//     </div>
//   );
// }
// /*
//  *
//  * `id` is passed in through the `context` object from `createPage`
//  * GraphQL requires us to declare the type of arguments at the top
//  * of the query before using them in the query body. We don't need to
//  * worry about finding the `id` value from the props and passing it in
//  * because we put it in `context` so Gatsby handles that for us.
//  *
//  */
// export const pageQuery = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       frontmatter {
//         title
//       }
//       code {
//         body
//       }
//     }
//   }
// `;
