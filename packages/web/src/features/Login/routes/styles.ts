import { theme } from "oriun-ui";

const FormWrapper = theme.styled("div", {
  backgroundColor: "$white",
  flex: "0 0 30%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Greetings = theme.styled("div", {
  // background: "rgb(29, 24, 84)",
  // backgroundImage: "linear-gradient(137deg, rgba(74, 6, 185, 1) 0%, rgba(29, 24, 84, 1) 100%)",
  background: "rgb(156,34,255)",
  backgroundImage: "linear-gradient(137deg, rgba(156,34,255,1) 19%, rgba(55,14,144,1) 100%)",
  flex: "1"
})

const Root = theme.styled("div", {
  display: "flex",
  height: "100vh",
  width: "100%",
  flexDirection: "column",

  "@bpLG": {
    flexDirection: "row"
  }
});

const Logo = theme.styled("span", {
  fontSize: "48px",
  fontWeight: "$bold",
  display: "block",

  "@bpLG": {
    margin: "50px 0 0 0"
  },

  "@bpSM": {
    margin: "30px 0 0 0"
  },

  "span": {
    color: "$primary"
  }
})

export default {
  FormWrapper,
  Greetings,
  Root,
  Logo
}
