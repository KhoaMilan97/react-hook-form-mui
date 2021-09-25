import React, { forwardRef } from "react";

import TextFiled from "@material-ui/core/TextField";

const Input = forwardRef((props, ref) => {
  return (
    <TextFiled
      fullWidth
      margin="normal"
      variant="outlined"
      inputRef={ref}
      autoComplete="off"
      {...props}
    />
  );
});

export default Input;
