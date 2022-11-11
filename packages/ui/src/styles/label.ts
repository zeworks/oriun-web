import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const LabelCSS = theme.css({
  fontWeight: "$bold",
  textTransform: "uppercase",
  fontSize: pxToRem(13),
})
