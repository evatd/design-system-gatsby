import Hurme3Regular2 from "../../assets/Hurme-Geometric-Sans-3-Regular.woff2";
import Hurme3Regular from "../../assets/Hurme-Geometric-Sans-3-Regular.woff";
import Hurme3Semibold2 from "../../assets/Hurme-Geometric-Sans-3-Semi-Bold.woff2";
import Hurme3Semibold from "../../assets/Hurme-Geometric-Sans-3-Semi-Bold.woff";
import Hurme3Bold2 from "../../assets/Hurme-Geometric-Sans-3-Bold.woff2";
import Hurme3Bold from "../../assets/Hurme-Geometric-Sans-3-Bold.woff";

export const fontFiles = [Hurme3Regular2, Hurme3Semibold2, Hurme3Bold2];

export const fontFace = `@font-face {font-family: 'Hurme Geometric Sans 3';src: url(${Hurme3Regular2}) format("woff2"), url(${Hurme3Regular}) format("woff");font-style: normal;font-weight: 400;font-display: swap;}@font-face {font-family: 'Hurme Geometric Sans 3';src: url(${Hurme3Semibold2}) format("woff2"), url(${Hurme3Semibold}) format("woff");font-style: normal;font-weight: 600;font-display: swap;}@font-face {font-family: 'Hurme Geometric Sans 3';src: url(${Hurme3Bold2}) format("woff2"), url(${Hurme3Bold}) format("woff");font-style: normal;font-weight: 700;font-display: swap;}`;
