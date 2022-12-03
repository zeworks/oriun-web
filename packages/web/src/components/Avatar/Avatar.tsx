import { theme } from "oriun-ui";

const AvatarStyles = theme.css({
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  boxShadow: "$primary"
})

const AvatarText = theme.styled("div", AvatarStyles, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$grey",

  fontSize: "1.1rem",
  fontWeight: "$regular",
  color: "$dark",
})

const AvatarImage = theme.styled("img", AvatarStyles, {
  objectFit: "cover"
});

export type AvatarProps = {
  src?: string;
  text?: string;
}

export function Avatar({ src, text, ...props }: AvatarProps) {

  if (text)
    return <AvatarText>{text}</AvatarText>

  if (src)
    return (
      <AvatarImage src={src} {...props} />
    )

  return null;
}
