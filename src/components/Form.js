import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

const Form = (props) => {
  const classes = useStyles();
  return (
    <form noValidate className={classes.form} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
