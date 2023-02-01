import { theme } from "@oriun/ui";

const Root = theme.styled("div", {
  display: "flex",
  height: "100vh",
  width: "100%",
  backgroundColor: "$white",
  
  "@bpLG": {
    padding: "24px",
    display: "grid",
    gridTemplateColumns: "1fr 40%",
  },

  "@media (min-width: 1920px)": {
    gridTemplateColumns: "1fr 25%",
  }
});

const FormWrapper = theme.styled("div", {
  width: "100%",
  padding: "24px",
  alignSelf: "center",

  "@bpLG": {
    maxWidth: 450,
    margin:"0 auto"
  }
});

const Logo = theme.styled("span", {
  fontSize: "48px",
  fontWeight: "$bold",
  display: "block",

  "@bpLG": {
    margin: "0 0 50px"
  },

  "@bpSM": {
    margin: "0 0 30px"
  },

  "span": {
    color: "$primary"
  }
})

const Illustration = theme.styled("div", {
  overflow: "hidden",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$primaryTransparent",
  borderRadius: "20px",

  "@bpLG": {
    display: "flex",
  }
})

const IllustrationImage = theme.styled("img", {
  maxWidth: "100%",
  display: "block",
  height: "55%",
})

export default {
  FormWrapper,
  Root,
  Logo,
  Illustration,
  IllustrationImage,
}
