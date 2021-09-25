import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.submit}
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
