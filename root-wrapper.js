import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import mdxComponents from "./src/components/mdxComponents";
import { MDXProvider } from "@mdx-js/tag";
import { color } from "./src/components/color";
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// const MyCodeComponent = ({ children, ...props }) => (
//   <LiveProvider code={children}>
//     <LiveEditor />
//     <LiveError />
//     <LivePreview />
//   </LiveProvider>
// );

export const universalWrapRootElement = ({ element }) => (
  <ThemeProvider
    theme={{
      color
    }}
  >
    <MDXProvider components={mdxComponents}>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html,
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Roboto Light", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
              "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";

            font-size: 16px;
          }
          a {
            color: #663399;
            text-decoration: none;
          }
        `}
      />
      {element}
    </MDXProvider>
  </ThemeProvider>
);
