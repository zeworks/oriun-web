import { styled } from "@stitches/react";
import { theme } from "oriun-ui";
import { TextSmall } from "oriun-ui/lib/components/Typography";

const TextSmallCSS = theme.css({
  color: "$danger"
})

export const TextSmallError = styled(TextSmall, TextSmallCSS);
