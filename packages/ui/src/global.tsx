import { globalCss } from "@stitches/core"
import { memo } from "react"

export const global = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap')", // roboto font family
    "url('https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap-grid.min.css')", // bootstrap grid
    "url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0')", // material symbols outlined
    "url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200,0,0')", // material symbols rounded
    "url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined')", // material icons outlined
    "url('https://fonts.googleapis.com/icon?family=Material+Icons')", // material icons filled
    "url('https://fonts.googleapis.com/icon?family=Material+Icons+Round')" // material icons rounded
  ],
  html: {
    fontSize: "14px",
    height: "100%"
  },
  body: {
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "400",
    margin: 0,
    padding: 0,
    color: "$dark",
    '-webkit-font-smoothing': "antialiased",

    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
      padding: 0,
      fontWeight: "500"
    }
  },
  '*': {
    boxSizing: "border-box"
  },
  '.material-icons': {
    fontFamily: 'Material Icons',
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "24px",  /* Preferred icon size */
    display: "inline-block",
    lineHeight: "1",
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr",
    '-webkit-font-smoothing': "antialiased",
    textRendering: "optimizeLegibility",
    '-moz-osx-font-smoothing': "grayscale",
    'font-feature-settings': "liga"
  }
})

export default memo(() => (<>{global}</>))
