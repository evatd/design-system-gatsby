import { css } from "@emotion/core";

const font = require("../font-face").fontFace;

export const globalStyles = css`
  ${font};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Hurme Geometric Sans 3";
  }
`;
