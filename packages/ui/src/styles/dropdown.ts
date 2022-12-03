import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const DropdownRootCSS = theme.css({
  position: "relative",
  display: "inline-flex",

  "*": {
    userSelect: "none"
  }
})

export const DropdownContentCSS = theme.css({
  position: "absolute",
  top: "calc(100% + 2px)",
  width: "100%",
  backgroundColor: "$white",
  boxShadow: "$primary",
  borderRadius: "6px",
  overflow: "hidden",

  "@bpLG": {
    width: "max-content",
  },

  variants: {
    variant: {
      center: {
        left: "50%",
        transform: "translateX(-50%)"
      },
      left: {
        left: 0,
      },
      right: {
        right: 0
      }
    }
  }
})

export const DropdownTriggerCSS = theme.css({
  display: "inline-flex",
  cursor: "pointer"
})

export const DropdownSeparatorCSS = theme.css({
  borderTop: `1px solid ${theme.theme.colors.grey}`,
  width: "100%"
})

export const DropdownLabelCSS = theme.css({
  fontSize: pxToRem(12),
  fontWeight: "$bold",
  color: "$grey",
  textTransform: "uppercase",
  padding: "0.8rem 1rem",
  display: "flex",
})

export const DropdownItemCSS = theme.css({
  fontSize: pxToRem(15),
  cursor: "default",
  display: "flex",
  padding: "0.8rem 1rem",

  "&:hover": {
    backgroundColor: "$primaryTransparent",
    color: "$primary"
  }
})
