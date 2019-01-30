import { rem, em } from "polished";

const theme = {
  colors: {
    primary: "#3dd2be",
    secondary: "#4c6085",
    black: "#1d1d1d",
    white: "#ffffff",
    tonal: ["#f3f3f3", "#e2e2e2", "#a0a0a0", "#717171", "#43464b", "#262728"]
  },
  lineHeights: {
    sm: 1,
    md: 1.2,
    lg: 1.5
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
    black: 900
  },
  fontSizes: {
    xxxs: rem(12),
    xxs: rem(14),
    xs: rem(16),
    sm: rem(20),
    md: rem(24),
    lg: rem(32),
    xl: rem(48),
    xxl: rem(64),
    xxxl: rem(80),
    xxxxl: rem(96)
  },
  letterSpacings: {
    sm: em(0.3),
    md: em(1),
    lg: em(1.5),
    xl: em(2),
    xxl: em(2.6),
    xxxl: em(3)
  },
  maxWidths: {
    small: rem(550),
    medium: rem(920),
    large: rem(1400)
  },
  space: [rem(0), rem(4), rem(8), rem(16), rem(32), rem(64), rem(128), rem(256)]
};

export default theme;
