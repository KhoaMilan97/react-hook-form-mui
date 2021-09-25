import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      shrink: {
        transform: "translate(0.25px, 1.5px) scale(1)",
        transformOrigin: "top left",
      },
    },
  },
});

export default Theme;
