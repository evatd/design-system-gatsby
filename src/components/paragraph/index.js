import React from "react";
import { css } from "@emotion/core";

const Paragraph = ({ ...props }) => (
  <p
    {...props}
    css={css`
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 1rem;
      letter-spacing: 0.01em;
      code {
        color: #3dd2be;
        font-size: 15px;
        font-family: monospace;
        padding: 0.25rem;
      }
    `}
  />
);

export default Paragraph;
