import { theme } from "@oriun/ui";

const Root = theme.styled("div", {
  display: "flex",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  background: "rgb(156,34,255)",
  backgroundImage: "linear-gradient(137deg, rgba(156,34,255,1) 19%, rgba(55,14,144,1) 100%)",

  "@bpLG": {
    flexDirection: "row"
  }
});

const FormWrapper = theme.styled("div", {
  backgroundColor: "$white",
  width: "100%",
  maxWidth: 500,
  padding: "24px",
  borderRadius: "6px",
  boxShadow: "$primary"
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

export default {
  FormWrapper,
  Root,
  Logo
}
