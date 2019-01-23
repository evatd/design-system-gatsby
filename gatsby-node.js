const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(`./src/components/posts-page-layout.js`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const filePath = node.fileAbsolutePath;
    const fileName = filePath
      .split("/")
      .slice(-1)
      .pop();
    // slug value is a respective component's name
    // file names match components' names,
    // so we get that value based on the former
    const componentName = fileName.split(".")[0];
    const value = createFilePath({ node, getNode });
    createNodeField({
      // 1) this is the name of the field you are adding,
      name: "slug",
      // 2) this node refers to each individual MDX
      node,
      value: `/components/${componentName}`
    });
  }
};
