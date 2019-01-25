import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import { Layout, Link } from "../components";

// force top-level navigation to be a certain order
//const forcedNavOrder = ["/getting-started", "/guides"];

// Add an item node in the tree, at the right position
function addToTree(treeNodes, node) {
  let pushed = false;
  // Check if the item node should inserted in a subnode
  treeNodes.forEach(treeNode => {
    // "/store/travel".indexOf( '/store/' )
    if (node.link.indexOf(treeNode.link + "/") === 0) {
      treeNode.items = treeNode.items || [];
      pushed = true;
      addToTree(treeNode.items, node);
    }
  });

  if (!pushed) {
    // Item node was not added to a subnode, so it's a sibling of these treeNodes
    treeNodes.push({
      title: node.title,
      link: node.link
    });
  }

  return treeNodes;
}

/**
 * create the tree for navigation items. looks like this, where items
 * is the same as the item shown. link and items are optional
 *
 * [{
 *   title: 'Some Title',
 *   link: '/maybe/some/link',
 *   items: [...]
 * }]
 */
function createTree(nodes) {
  // algo depends on shorter URLs being first in the list
  return nodes
    .sort((a, b) => a.link.split("/").length - b.link.split("/").length)
    .reduce(addToTree, []);
}

const reduceNavTwo = allMdx => {
  const edges = allMdx.edges
    .filter(({ node }) => node.fields.slug !== "/")
    .map(({ node }) => ({
      title: node.frontmatter.title,
      link: node.fields.slug
    }));
  return createTree(edges).sort((a, b) => {
    const aScore = a.items ? a.items.length : 0;
    const bScore = b.items ? b.items.length : 0;
    return bScore - aScore;
  });
};

const Item = ({ item }) => console.log(item, "item");
// const RawLayout = props => <div>{props.children}</div>;

const DocLayout = props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
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
    render={({ allMdx }) => {
      console.log(allMdx, "mdx");
      const itemList = reduceNavTwo(allMdx);
      console.log(itemList, "item list");
      return (
        <ul>
          {itemList.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      );
      // <Layout {...props} itemList={itemList}>
      //   <Helmet />
      //   {children}
      //   <div
      //     css={{
      //       width: "100%",
      //       margin: "4rem 0 2rem",
      //       padding: "1rem 1.5rem",
      //       borderTop: "1px solid #ddd",
      //       textAlign: "right"
      //     }}
      //   />
      // </Layout>
    }}
  />
);

export default DocLayout;
