import React from "react";
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// const Code = ({ children, ...props }) => {
//   return (
//     <LiveProvider code={children} {...props}>
//       <LiveEditor />
//       <LiveError />
//       <LivePreview />
//     </LiveProvider>
//   );
// };

// export default Code;

const Code = ({ children, ...props }) => (
  <code {...props} style={{ color: "#3dd2be", background: "#f3f3f3" }} />
);

export default Code;
